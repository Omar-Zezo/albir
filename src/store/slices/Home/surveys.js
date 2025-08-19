import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getSurveys = createAsyncThunk(
    "home/getSurveys", 
    async ({str}, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/surveys?${str}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const surveys = createSlice({
    name: "surveys",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSurveys.pending, (state) => {
            state.error = null
        })
        builder.addCase(getSurveys.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getSurveys.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default surveys.reducer
