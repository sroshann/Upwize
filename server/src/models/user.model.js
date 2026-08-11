import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(

    {

        admissionNumber: { type: Number, unique: true, required: true },
        rollNumber: { type: String, unique: true, required: true },
        gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
        fullName: {

            firstName: { type: String, required: true },
            middleName: { type: String },
            lastName: { type: String, required: true }

        },
        program: { type: String, required: true, default: 'UG', enum: ['UG', 'PG'] },
        ugDep: {

            type: String,
            default: 'CSE',
            enum: ['CSE', 'EEE', 'ECE', 'ME', 'CHE', 'CE', 'CSAI', 'ER', 'ARCH']

        },
        pgDep: {

            type: String,
            default: 'CSE',
            enum: ['CSE', 'EEE', 'ECE', 'ME', 'CHE', 'CE', 'ER']

        },
        year: { type: Number, required: true, default: 1 },
        semester: { type: Number, required: true, default: 1 },
        section: { type: String, required: true, default: 'A' },
        phone: { type: Number, required: true, unique: true, minlength: 10, maxlength: 10 },
        password: { type: String, required: true, minlength: 8 },
        email: {

            type: String,
            required: true,
            unique: true,
            match: [/^[\w.+-]+@tkmce\.ac\.in$/, 'Email must be a valid TKMCE email address']

        }

    },
    { timestamps: true }

)

const UserModel = mongoose.models.User || mongoose.model('User', userSchema)
export default UserModel