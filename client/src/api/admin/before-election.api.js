import { axiosInstance } from "../../lib/axios.lib"

// Creating new party
export const addAssociation = async (data) => {

    const response = await axiosInstance.post('/admin/before-election/add-association', data)
    return response?.data

}

// Get all parties
export const getAllParties = async () => {}

// Remove association
export const removeAssociation = async (id) => {

    // Syntax of delete is different
    const response = await axiosInstance.delete('/admin/before-election/remove-association', { data: { id } })
    const { message } = response?.data
    return message

}

// Add candidate
export const addCandidate = async (data) => {

    const response = await axiosInstance.post('/admin/before-election/add-candidate', data)
    return response?.data

}