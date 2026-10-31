import toast from "react-hot-toast"
import { toastStyle } from "../lib/toast.lib"

// Add association validation to formik
export const validateAddAssociation = (values) => {

    const { fullName, shortName, logo, color, description } = values
    let error = {}

    // Logo
    if (!logo) error.logo = 'Logo is required'

    // Full name
    if (!fullName || fullName.trim() === '') error.fullName = 'Full name is required'
    else if (fullName.length < 5) error.fullName = 'Atleast 5 charecters for full name'
    else if (fullName.length > 50) error.fullName = 'Atmost 50 charecters for full name'

    // Short name
    if (!shortName || shortName.trim() === '') error.shortName = 'Short name is required'
    else if (shortName.length <= 1) error.shortName = 'Atleast 2 charecters for short name'
    else if (shortName.length > 5) error.shortName = 'Atmost 5 charecters for short name'

    // Color
    if (!color || color.trim() === '') error.color = 'Color is required'

    // Description
    if (!description || description.trim() === '') error.description = 'Description is required'
    else if (description.length < 5) error.description = 'Atleast 5 charecters for description'
    else if (description.length > 500) error.description = 'Atmost 500 charecters for description'

    // This is the proper way of formik validation
    // If the returning object has any key value pairs, formik will block the submssion
    // else it will proceed ( in here if no errors it will return null )
    return Object.keys(error).length ?
        toast.error(Object.values(error)[0], { style: toastStyle })
        : null

}

// Vaidating uploaded image
export const validateImage = (file) => {

    if (file.type !== 'image/png') return { error: true, message: 'Only png logos are allowed' }
    else if (file.size > 3 * 1024 * 1024) return { error: true, message: 'Logo size should not exceed 3MB' }
    else return { error: false }

}

// Add position validate to formik
export const validatePosition = ( values ) => {

    const { 
        
        position, responsibilities, shortName, belongsTo,
        category, gender, program, department, description
    
    } = values
    let error = {}

    // Position
    if( !position || position.trim() === '' ) error.position = 'Position name is required'
    else if( position.length < 5 ) error.position = 'Atleast 5 characters for position'
    else if( position.length > 50 ) error.position = 'Atmost 50 characters for position'

    // Responsibilities
    if( responsibilities.length === 0 ) error.responsibilities = 'Atleast one responsibility is required'

    // Short name
    if( shortName && shortName.length < 2 ) error.shortName = 'Atleast 2 characters for short name'
    else if( shortName && shortName.length > 5 ) error.shortName = 'Atmost 5 charaters for short name'

    // If the position is belongs to something
    if( belongsTo ) {
        
        // Category
        if( !category ) error.category = 'Category should be selected'
        // Gender
        else if( category === 'g' && !gender ) error.gender = 'Gender should be selected'
        else if( category === 'p' ) {
            
            // Program
            if( !program ) error.program = 'Program should be selected'
            // Department
            else if( program && !department ) error.department = 'Department should be selected'

        }


    }

    // Description
    if( !description || description.trim() === '' ) error.description = 'Description is required'
    else if( description.length < 5 ) error.description = 'Atleast 5 characters for description'
    else if( description.length > 500 ) error.description = 'Atmost 500 characters for description'

    return Object.keys( error ).length ?
        toast.error( Object.values( error )[0], { style: toastStyle } )
        : null

}