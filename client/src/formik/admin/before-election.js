import { useFormik } from "formik"
import { addAssociation } from "../../api/admin/before-election"
import { useDispatch } from "react-redux"
import { addParty } from "../../store/slices/allParties.slice"
import toast from 'react-hot-toast'
import { toastStyle } from "../../lib/toast.lib"

// NEED TO ALSO INTEFRATE REACT TANSACK QUERY ALSO HERE

// Create association formik
export const addPartyFormik = ({ setLogoPreview, fileInputRef }) => {

    const dispatch = useDispatch()
    return useFormik({

        initialValues: {

            fullName: '',
            shortName: '',
            logo: null,
            color: '#0865FF',
            description: ''

        },
        validateOnBlur: false,
        validateOnChange: false,
        validateOnMount: false,
        onSubmit: async (values, { resetForm }) => {

            try {

                const { message, data } = await addAssociation(values)
                dispatch(addParty(data)) // Adding the new party into redux
                toast.success(message, { style: toastStyle })

            } catch (error) { toast.error(error?.response?.data?.message || 'Something went wrong', { style: toastStyle }) }

            // Resetting the form
            if (fileInputRef?.current) fileInputRef.current.value = ''
            setLogoPreview(null)
            resetForm()

        }

    })

}