import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getDonateOnlineDetails = createAsyncThunk(
    "home/getDonateOnlineDetails", 
    async (id, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/service-section/${id}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const donateOnlineDetails = createSlice({
    name: "donateOnlineDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDonateOnlineDetails.pending, (state) => {
            state.error = null
        })
        builder.addCase(getDonateOnlineDetails.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getDonateOnlineDetails.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default donateOnlineDetails.reducer
