import { Association } from "../../models/association.model.js"
import { validateImage } from "../../util/validateFile.util.js"
import { uploadToCloudinary } from '../../lib/cloudinary.lib.js'
import { redisClient } from "../../lib/redis.lib.js"
import Position from "../../models/position.model.js"
import { isAlreadyInDB } from "../../util/database.js"

// Add association
export const addAssociation = async (request, response) => {

    try {

        const { fullName, shortName, color, description } = request?.body
        let { logo } = request?.body

        // Checking whether the incoming data is already exist in database or not
        const matched = await isAlreadyInDB(Association, { fullName, shortName, color })
        if (matched) return response?.status(409).json({ message: `${matched} is already taken` })

        if (logo) {

            // Validating uploaded logo as valid BS6 and image size
            const imageResult = validateImage(logo)
            if (imageResult?.error) return response.status(400).json({ message: imageResult?.message })

            const cloudinary = await uploadToCloudinary(imageResult?.file)
            if (cloudinary?.error) return response.status(400).json({ message: cloudinary?.message })

            logo = cloudinary?.url

        }

        // Creating new party in DB
        const newParty = new Association({ fullName, shortName, logo, color, description })
        await newParty.save()

        if (newParty) {

            const { __v, ...rest } = newParty.toObject()
            // Storing the new party in Redis cache
            await redisClient.hSet('associations', rest?._id.toString(), JSON.stringify(rest))
            await redisClient.expire('associations', 1800) // Setting its TTL as 30 minutes
            return response?.status(200).json({

                message: `New Association '${shortName}' created`,
                data: rest

            })

        }

    } catch (error) { return response.status(500).json({ message: "Error on adding association" }) }

}

// Get all associations
export const getAllAssociations = (request, response) => { }

// Remove association
export const removeAssociation = async (request, response) => {

    try {

        const { id } = request?.body
        const deletedAssociation = await Association.findByIdAndDelete(id)
        await redisClient.hDel('associations', id)
        if (!deletedAssociation) return response.status(404).json({ message: 'Association not found' })
        return response.status(200).json({ message: 'Association removed successfully' })

    } catch (error) { return response.status(500).json({ message: 'Error on removing association' }) }

}

// Add positions
export const addPositions = async (request, response) => {

    try {

        const {

            position, responsibilities, shortName, belongsTo,
            category, program, department, gender, description

        } = request?.body

        // Checking whether the incoming data is already present in data or not
        const matched = isAlreadyInDB(Position, { position, shortName })
        if (matched) return response?.status(409).json({ message: `${matched} is already taken` })

        const newData = new Position({ 
            
            position, responsibilities, shortName, belongsTo,
            category, program, department, gender, description
        
        })
        await newData.save()

        if( newData ) {

            const { __v, ...rest } = newData.toObject()
            await redisClient.hSet('positions', rest?._id.toString(), JSON.stringify( rest ))
            await redisClient.expire('positions', 1800)
            return response?.status( 200 ).json({ message: `${ rest?.position } added successfully`, data: rest })

        }

    } catch (error) { return response?.status(500).json({ error: 'Error on adding position' }) }

}