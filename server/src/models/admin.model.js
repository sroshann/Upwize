import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema(

    {

        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        adminName: { type: String, required: true, unique: true },
        phone: { type: Number, required: true, unique: true, minlength: 10, maxlength: 10 },
        super: { type: Boolean, required: true },
        password: { type: String, required: true, minlength: 8 },
        profileImg: { type: String }

    },
    { timestamps: true }

)

const AdminModel = mongoose.models.Admin || mongoose.model('Admin', adminSchema)
export default AdminModel