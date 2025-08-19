import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getNews = createAsyncThunk(
    "home/getNews", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/V2/news")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const news = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state) => {
            state.error = null
        })
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getNews.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default news.reducer
