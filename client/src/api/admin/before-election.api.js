import { axiosInstance } from "../../lib/axios.lib"

// Creating new party
export const addAssociation = async (data) => {

    const response = await axiosInstance.post('/admin/before-election/add-association', data)
    return response?.data

}

// Get all parties
export const getAssociations = async () => {

    const response = await axiosInstance.get('/admin/before-election/get-associations')
    const { data } = response?.data
    return data

}

// Remove association
export const removeAssociation = async (id) => {

    // Syntax of delete is different
    const response = await axiosInstance.delete('/admin/before-election/remove-association', { data: { id } })
    const { message } = response?.data
    return message

}