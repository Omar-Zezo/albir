import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getSlides = createAsyncThunk(
    "home/getSlides", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/V2/sliders")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const slider = createSlice({
    name: "slider",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSlides.pending, (state) => {
            state.error = null
        })
        builder.addCase(getSlides.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getSlides.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default slider.reducer
