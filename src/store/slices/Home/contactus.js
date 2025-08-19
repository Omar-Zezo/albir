import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const contactusMsg = createAsyncThunk(
    "home/contactusMsg", 
    async (data, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.post("/home/contact-us", data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const contactus = createSlice({
    name: "contactus",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(contactusMsg.pending, (state) => {
            state.error = null
        })
        builder.addCase(contactusMsg.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(contactusMsg.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default contactus.reducer
