import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getServicesAlbir = createAsyncThunk(
    "home/getServicesAlbir", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/home/services-albir")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const ServicesAlbir = createSlice({
    name: "ServicesAlbir",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getServicesAlbir.pending, (state) => {
            state.error = null
        })
        builder.addCase(getServicesAlbir.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getServicesAlbir.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default ServicesAlbir.reducer
