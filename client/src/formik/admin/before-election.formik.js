import { useFormik } from "formik"
import toast from 'react-hot-toast'
import { toastStyle } from "../../lib/toast.lib"
import { validateAddAssociation, validatePosition } from "../../utils/validate.utils"
import { useAddAssociation, useAddPosition } from "../../hooks/admin/before-election.hook"

// Create association formik
export const addPartyFormik = ({ setLogoPreview, fileInputRef }) => {

    const { mutate } = useAddAssociation()
    return useFormik({

        initialValues: {

            fullName: '',
            shortName: '',
            logo: null,
            color: '#0865FF',
            description: ''

        },
        validate: validateAddAssociation,
        validateOnBlur: false,
        validateOnChange: false,
        validateOnMount: false,
        onSubmit: (values, { resetForm }) => {

            toast.loading('Adding association', { id: 'add-association', style: toastStyle })
            mutate(values, {

                onSuccess: () => {

                    // Resetting the form
                    if (fileInputRef?.current) fileInputRef.current.value = ''
                    setLogoPreview(null)
                    resetForm()

                }

            })

        }

    })

}

// Add position formik
export const addPositionFormik = () => {

    const { mutate } = useAddPosition()
    return useFormik({

        initialValues: {

            position: '', responsibilities: [], shortName: '', 
            belongsTo: false, category: null, gender: null,
            program: null, department: null, description: ''

        },
        validate: validatePosition,
        validateOnBlur: false,
        validateOnMount: false,
        validateOnChange: false,
        onSubmit: ( values, { resetForm } ) => {

            toast.loading('Adding association', { id: 'add-position', style: toastStyle })
            mutate( values, { onSuccess: () => resetForm() } )

        }

    })

}