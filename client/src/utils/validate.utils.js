export const validateAddAssociation = (values) => {

    const { fullName, shortName, logo, color, description } = values

    // Logo
    if (!logo) return { error: true, message: 'Logo is required' }

    // Full name
    if (!fullName || fullName.trim() === '') return { error: true, message: 'Full name is required' }
    else if (fullName.length < 5) return { error: true, message: 'Must be atleast 5 charecters' }
    else if (fullName.length > 50) return { error: true, message: 'Should not greater than 50 charecters' }

    // Short name
    if (!shortName || shortName.trim() === '') return { error: true, message: 'Short name is required' }
    else if (shortName.length <= 1) return { error: true, message: 'Must be atleast 2 charecters' }
    else if (shortName.length > 5) return { error: true, message: 'Should not greater than 5 charecters' }

    // Color
    if (!color || color.trim() === '') return { error: true, message: 'Color is required' }

    // Description
    if (!description || description.trim() === '') return { error: true, message: 'Description is required' }
    else if (description.length < 5) return { error: true, message: 'Must be atleast 5 charecters' }
    else if (description.length > 500) return { error: true, message: 'Should not greater than 500 charecters' }

    return { error: false }

}

// Vaidating uploaded image
export const validateImage = (file) => {

    if (file.type !== 'image/png') return { error: true, message: 'Only png logos are allowed' }
    else if (file.size > 3 * 1024 * 1024) return { error: true, message: 'Logo size should not exceed 3MB' }
    else return { error: false }

}