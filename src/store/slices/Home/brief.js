import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getBrief = createAsyncThunk(
    "home/getBrief", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/home/get-to-know-us/brief")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const brief = createSlice({
    name: "brief",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBrief.pending, (state) => {
            state.error = null
        })
        builder.addCase(getBrief.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getBrief.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default brief.reducer
