import { configureStore } from "@reduxjs/toolkit";
import uiStore from "../reducers/ui-store"
import apiStore from "../reducers/api-store"

const store = configureStore({
    reducer: {
        ui: uiStore,
        api: apiStore,
    }
})

store.subscribe(() => {
    console.log('title changed')
    const state = store.getState()
    document.title = state.ui.title
})

export default store