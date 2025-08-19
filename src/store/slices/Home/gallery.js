import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getGallery = createAsyncThunk(
    "home/getGallery", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/V2/gallery")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const gallery = createSlice({
    name: "gallery",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGallery.pending, (state) => {
            state.error = null
        })
        builder.addCase(getGallery.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getGallery.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default gallery.reducer
