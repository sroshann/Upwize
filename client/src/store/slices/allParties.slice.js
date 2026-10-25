import { createSlice } from "@reduxjs/toolkit"

const initialState = { allParties: [] }
const partiesSlice = createSlice({

    initialState,
    name: 'All parties',
    reducers: {

        setAllParties: (state, action) => { state.allParties = action.payload },
        addParty: (state, action) => { state.allParties = [...state.allParties, action.payload] },
        removeParty: (state, action) => { state.allParties = state.allParties.filter(p => p._id != action?.payload) }

    }

})

export const { setAllParties, addParty, removeParty } = partiesSlice.actions
export default partiesSlice.reducer