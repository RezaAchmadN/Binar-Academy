import { createSlice } from "@reduxjs/toolkit";

export const uiStore = createSlice({
    name: "uiStore",
    initialState: {
        title: "Binar Academy"
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        }
    }
})

export const { setTitle } = uiStore.actions

export default uiStore.reducer