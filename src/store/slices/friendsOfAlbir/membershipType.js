import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getMembershipType = createAsyncThunk(
    "home/getMembershipType", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/albir-friends/packages`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const membershipType = createSlice({
    name: "membershipType",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMembershipType.pending, (state) => {
            state.error = null
        })
        builder.addCase(getMembershipType.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getMembershipType.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default membershipType.reducer
