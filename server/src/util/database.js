import mongoose from 'mongoose'

export const connectDB = async () => {

    try {

        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log("database connected");

    } catch (error) { console.error('database error') }

}

// This function is used to find any data is already present in database or not
// Model -> The corresponding database model
// data -> The data to checked, as object
export const isAlreadyInDB = async ( Model, data ) => {

    const conditions = Object.entries(data)
        .filter(([, value]) => value)
        .map(([field, value]) => ({ [field]: value }))

    const existing = await Model.findOne({ $or: conditions }).lean()
    if (!existing) return null

    const matchedFields = conditions
        .map(cond => Object.keys(cond)[0])
        .filter(field => String(existing[field]) === String(data[field]))

    return data[matchedFields[0]]

}