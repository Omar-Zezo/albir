import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const donorRegister = createAsyncThunk(
    "home/donorRegister", 
    async (data, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.post(`/V2/albir-friends/join/donor`, data)
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const donorJoin = createSlice({
    name: "donorJoin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(donorRegister.pending, (state) => {
            state.error = null
        })
        builder.addCase(donorRegister.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(donorRegister.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default donorJoin.reducer
