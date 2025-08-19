import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getDonationPayment = createAsyncThunk(
    "home/getDonationPayment", 
    async (data, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.post("/V2/make_donation_order", data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const donationPayment = createSlice({
    name: "donationPayment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDonationPayment.pending, (state) => {
            state.error = null
        })
        builder.addCase(getDonationPayment.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getDonationPayment.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default donationPayment.reducer
