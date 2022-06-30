import apiConfig from "../config/api.json"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAsyncData = createAsyncThunk(
    "apiStore/getAsyncData",
    async () => {
        const listCars = await fetch(apiConfig.URL)
        const listCarsJson = await listCars.json()

        return listCarsJson
    }
)

export const apiStore = createSlice({
    name: "apiStore",
    initialState: {
        cars: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAsyncData.fulfilled, (state, action) => {
            let results = [...action.payload]
            let cars = []
            for (let i = 0; i < results.length; i++) {
                let item = results[i]
                item.image = item.image.replaceAll("./", apiConfig.IMAGE_BASE_URL + "/")
                cars.push(item)
            }
            state.cars = cars
        })
    }
})

export default apiStore.reducer