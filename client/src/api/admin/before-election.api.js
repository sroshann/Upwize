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

// Get all positions
export const getPositions = async () => {

    const response = await axiosInstance.get('/admin/before-election/get-positions')
    const { data } = response?.data
    return data

}

// Adding candidates
export const addCandidate = async (data) => {

    const response = await axiosInstance.post('/admin/before-election/add-candidate', data)
    return response?.data

}

// Adding position
export const addPosition = async ( data ) => {

    const response = await axiosInstance.post('/admin/before-election/add-position', data)
    return response?.data

}