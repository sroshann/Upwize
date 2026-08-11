import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
    {
        fullName: {

            firstName: { type: String, required: true },
            middleName: { type: String },
            lastName: { type: String, required: true }

        },
        profileImg: { type: String, required: true, unique: true },
        association: { type: String, required: true, unique: true }
    },
    { timestamps: true }
)

export const Candidate = mongoose.model('Candidate', candidateSchema)