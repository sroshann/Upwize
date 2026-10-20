import { axiosInstance } from "../../lib/axios.lib"

// Creating new party
export const addAssociation = async (data) => {

    try {

        const response = await axiosInstance.post('/admin/before-election/add-association', data)
        return response?.data

    } catch (error) { throw error?.response?.data?.message }

}

// Get all parties
export const getAllParties = async () => {

    try {



    } catch (error) { throw error?.response?.data?.message }

}

// Remove association
export const removeAssociation = async (id) => {

    try {

        // Syntax of delete is different
        const response = await axiosInstance.delete('/admin/before-election/remove-association', { data: { id } })
        const { message } = response?.data
        return message

    } catch (error) { throw error?.response?.data?.message }

}