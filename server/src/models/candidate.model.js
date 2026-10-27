import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
    {
        fullName: {

            firstName: { type: String, required: true },
            lastName: { type: String, required: true }

        },
        profileImg: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
        department: { type: String, required: true },
        semester: { type: String, required: true },
        batch: { type: String, required: true },
        position: { type: String, required: true },
        association: { type: String, required: true },
        contactNumber: { type: String, required: true },
        club: { type: String },
        role: { type: String },
        message: { type: String }
    },
    { timestamps: true }
)

export const Candidate = mongoose.model('Candidate', candidateSchema)