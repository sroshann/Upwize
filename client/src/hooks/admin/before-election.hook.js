import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addAssociation } from '../../api/admin/before-election.api'
import { toastStyle } from '../../lib/toast.lib'
import toast from 'react-hot-toast'

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