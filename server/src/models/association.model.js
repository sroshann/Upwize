import mongoose from "mongoose";

const associationSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true, unique: true },
        shortForm: { type: String, required: true, unique: true },
        logo: { type: String, required: true, unique: true },
        slogan: { type: String, required: true, unique: true },
        color: {

            type: [String],
            required: true,
            match: [/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, 'Must be a valid hex color code']

        }
    },
    { timestamps: true }
)

export const Association = mongoose.model('Association', associationSchema)