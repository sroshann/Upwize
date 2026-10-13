import { v2 as cloudinary } from 'cloudinary'
import { config } from 'dotenv'
config()

cloudinary.config({

    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

})


export const uploadToCloudinary = async (file) => {

    try {

        if (!file) return { message: 'No file provided', error: true }
        const result = await cloudinary.uploader.upload(

            file,
            { folder: 'association/logo', resource_type: 'image' }

        )

        return { url: result.url, error: false }

    } catch (error) { return { message: error.message, error: true } }

}