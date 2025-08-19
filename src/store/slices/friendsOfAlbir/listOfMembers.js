import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getListOfMembers = createAsyncThunk(
    "home/getListOfMembers", 
    async ({str}, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/albir-friends/list?${str}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const listOfMembers = createSlice({
    name: "listOfMembers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListOfMembers.pending, (state) => {
            state.error = null
        })
        builder.addCase(getListOfMembers.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getListOfMembers.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default listOfMembers.reducer
