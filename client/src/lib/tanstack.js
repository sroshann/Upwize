import { QueryClient, QueryCache } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { toastStyle } from "./toast.lib"

export const queryClient = new QueryClient({

    queryCache: new QueryCache({
        onError: (error) => toast.error(error.message, { style: toastStyle })
    })
    
})

// Query keys for tanstack cache
export const queryKeys = {

    associations: () => ['associations'],
    rcntAssociation: () => ['associations', 'recent'],
    positions: () => ['positions'],
    rcntPositions: () => ['position, recent']

}