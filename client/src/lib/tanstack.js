import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient()

// Query keys for tanstack cache
export const queryKeys = {

    associations: () => ['associations'],
    rcntAssociation: () => ['associations', 'recent']

}