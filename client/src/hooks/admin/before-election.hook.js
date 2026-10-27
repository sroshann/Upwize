import { useMutation, useQuery } from '@tanstack/react-query'
import { addAssociation, getAssociations, getPositions, removeAssociation } from '../../api/admin/before-election.api'
import { toastStyle } from '../../lib/toast.lib'
import toast from 'react-hot-toast'
import { queryClient, queryKeys } from '../../lib/tanstack'

// Adding association
export const useAddAssociation = () => {

    const { mutate } = useMutation({

        mutationFn: addAssociation,
        onSuccess: ({ message, data }) => {

            // In here there will be no caches on start, this is created manually
            queryClient.setQueryData(queryKeys.associations(), (old = []) => [...old, data])
            queryClient.setQueryData(queryKeys.rcntAssociation(), (old = []) => [...old, data])
            toast.success(message, { style: toastStyle })
        },
        onError: error => toast.error(error?.response?.data?.message || 'Something went wrong', { style: toastStyle }),
        onSettled: () => toast.remove('add-association')

    })

    return { mutate }

}

// Removing association
export const useRemoveAssociation = () => {

    const { mutate } = useMutation({

        mutationFn: removeAssociation,
        onSuccess: (message, id) => {

            // Association is also removed from cache
            queryClient.setQueryData(queryKeys.rcntAssociation(), (old = []) =>
                old.filter(association => association._id !== id)
            )
            queryClient.setQueryData(queryKeys.associations(), (old = []) =>
                old.filter(association => association._id !== id)
            )
            toast.success( message, { style: toastStyle } )

        },
        onError: error => toast.error( error?.response?.data?.message || 'Something went wrong', { style: toastStyle } ),
        onSettled: () => toast.remove('remove-association') 

    })   
    
    return { mutate }

}

// Getting all associations from server
export const useGetAssociations = () => {

    return useQuery({

        queryKey: queryKeys.associations(),
        queryFn: getAssociations,
        staleTime: 1000 * 60 * 30, // 30 min

    })

}

// Getting all positions
export const useGetPositions = () => {

    return useQuery({

        queryKey: queryKeys.positions(),
        queryFn: getPositions,
        staleTime: 1000 * 60 * 30, // 30 min

    })

}