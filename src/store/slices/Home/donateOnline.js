import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getDonateOnline = createAsyncThunk(
    "home/getDonateOnline", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/V2/service-sections")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const donateOnline = createSlice({
    name: "donateOnline",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDonateOnline.pending, (state) => {
            state.error = null
        })
        builder.addCase(getDonateOnline.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getDonateOnline.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default donateOnline.reducer
