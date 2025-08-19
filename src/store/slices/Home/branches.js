import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getBranches = createAsyncThunk(
    "home/getBranches", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/home/branches")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const branches = createSlice({
    name: "branches",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBranches.pending, (state) => {
            state.error = null
        })
        builder.addCase(getBranches.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getBranches.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default branches.reducer
