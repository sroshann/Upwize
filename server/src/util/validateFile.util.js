export const validateImage = (file) => {

    // Checking whether the uploaded images is in base64 fomat rather than a URL or a path
    const imageRegex = /^data:image\/(png|jpe?g|gif|webp|bmp|svg\+xml);base64,[A-Za-z0-9+/]+=*$/
    if (typeof file !== 'string' || !imageRegex.test(file))
        return { message: 'Invalid profile picture', error: true }

    // Checking whether the image exceeds more than 3MB
    const img = file.split(',')[1]
    const byteSize = Buffer.byteLength(img, 'base64')
    const MAX_SIZE = 3 * 1024 * 1024 // 3MB
    if (byteSize > MAX_SIZE) return { message: 'Image size should not exceed 3MB', error: true }

    // Return the file
    return { file, error: false }
}