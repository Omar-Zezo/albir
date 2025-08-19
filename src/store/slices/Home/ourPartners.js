import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getOurPartners = createAsyncThunk(
    "home/getOurPartners", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/our-partners`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const ourPartners = createSlice({
    name: "ourPartners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOurPartners.pending, (state) => {
            state.error = null
        })
        builder.addCase(getOurPartners.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getOurPartners.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default ourPartners.reducer
