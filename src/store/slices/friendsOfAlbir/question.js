import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getQuestion = createAsyncThunk(
    "home/getQuestion", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/V2/albir-friends")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const question = createSlice({
    name: "question",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuestion.pending, (state) => {
            state.error = null
        })
        builder.addCase(getQuestion.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getQuestion.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default question.reducer
