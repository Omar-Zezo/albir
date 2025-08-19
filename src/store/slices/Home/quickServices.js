import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getQuickServices = createAsyncThunk(
    "home/getQuickServices", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/V2/quick-services")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const quickServices = createSlice({
    name: "quickServices",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuickServices.pending, (state) => {
            state.error = null
        })
        builder.addCase(getQuickServices.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getQuickServices.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default quickServices.reducer
