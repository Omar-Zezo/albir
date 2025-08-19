import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getMemberDetails = createAsyncThunk(
    "home/getMemberDetails", 
    async (id, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/albir-friends/show/${id}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const memberDetails = createSlice({
    name: "memberDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMemberDetails.pending, (state) => {
            state.error = null
        })
        builder.addCase(getMemberDetails.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getMemberDetails.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default memberDetails.reducer
