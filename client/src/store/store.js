import { configureStore } from "@reduxjs/toolkit";
import associationReducer from "./slices/allParties.slice"

export const store = configureStore({
    reducer: {

        association: associationReducer

    }
})