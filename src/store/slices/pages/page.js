import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getPage = createAsyncThunk(
    "home/getPage", 
    async (id, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/page/${id}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const page = createSlice({
    name: "page",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPage.pending, (state) => {
            state.error = null
        })
        builder.addCase(getPage.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getPage.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default page.reducer
