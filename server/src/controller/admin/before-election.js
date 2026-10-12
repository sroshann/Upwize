import { Association } from "../../models/association.model.js"
import { validateImage } from "../../util/validateFile.util.js"
import { uploadToCloudinary } from '../../lib/cloudinary.lib.js'

// NEED TO INTEGRATE REDIS

// Add association
export const addAssociation = async (request, response) => {

    try {

        const { fullName, shortName, color, description } = request?.body
        let { logo } = request?.body

        // Checking whether this details already exist or not
        const party = await Association.findOne({

            $or: [{ fullName }, { shortName }, { color: { $in: color } }]

        })
        if (party) {

            if (party?.fullName === fullName)
                return response.status(400).json({ message: "Party name is already taken" })
            else if (party?.shortName === shortName) return response.status(400).json({ message: "Short name is already taken" })
            else if (party?.color.some(c => c === color))
                return response.status(400).json({ message: "Color is already taken" })
            else if (party?.logo === logo) return response?.status(400).json({ error: 'Logo is already used' })

        }

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
            return response?.status(200).json({

                message: `New Association "${shortName}" created`,
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
        if (!deletedAssociation) return response.status(404).json({ message: 'Association not found' })
        return response.status(200).json({ message: 'Association removed successfully' })

    } catch (error) {
        return response.status(500).json({ message: 'Error on removing association' })
    }

}