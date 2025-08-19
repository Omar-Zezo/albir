import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const memberJoin = createAsyncThunk(
    "home/memberJoin", 
    async (formData, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            const config = {headers: {"Content-Type": "multipart/form-data"}}
            return await baseUrl.post(`/V2/albir-friends/join`, formData, config)
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const join = createSlice({
    name: "join",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(memberJoin.pending, (state) => {
            state.error = null
        })
        builder.addCase(memberJoin.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(memberJoin.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default join.reducer
