import mongoose from 'mongoose'

export const connectDB = async () => {

    try {

        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log("database connected");

    } catch (error) { console.error('database error') }

}