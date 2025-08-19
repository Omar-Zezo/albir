import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getModules = createAsyncThunk(
    "home/getModules", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/modules`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const modules = createSlice({
    name: "modules",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getModules.pending, (state) => {
            state.error = null
        })
        builder.addCase(getModules.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getModules.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default modules.reducer
