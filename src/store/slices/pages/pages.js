import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getPages = createAsyncThunk(
    "home/getPages", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/pages")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const pages = createSlice({
    name: "pages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPages.pending, (state) => {
            state.error = null
        })
        builder.addCase(getPages.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getPages.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default pages.reducer
