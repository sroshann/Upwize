import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addAssociation, removeAssociation } from '../../api/admin/before-election.api'
import { toastStyle } from '../../lib/toast.lib'
import toast from 'react-hot-toast'

// Adding association
export const useAddAssociation = () => {

    const queryClient = useQueryClient()
    const { mutate } = useMutation({

        mutationFn: addAssociation,
        onSuccess: ({ message, data }) => {

            // In here there will be no caches on start, this is created manually
            queryClient.setQueryData(['associations', 'recently-added'], (old = []) => [...old, data])
            toast.success(message, { style: toastStyle })
        },
        onError: error => toast.error(error || 'Something went wrong', { style: toastStyle }),
        onSettled: () => toast.remove('add-association')

    })

    return { mutate }

}

// Removing association
export const useRemoveAssociation = () => {

    const queryClient = useQueryClient()
    const { mutate } = useMutation({

        mutationFn: removeAssociation,
        onSuccess: (message, id) => {

            // Association is also removed from cache
            queryClient.setQueryData(['associations', 'recently-added'], (old = []) =>
                old.filter(association => association._id !== id)
            )
            toast.success( message, { style: toastStyle } )

        },
        onError: error => toast.error( error, { style: toastStyle } ),
        onSettled: () => toast.remove('remove-association') 

    })   
    
    return { mutate }

}