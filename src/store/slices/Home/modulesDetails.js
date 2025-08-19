import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getModulesDetails = createAsyncThunk(
    "home/getModulesDetails", 
    async (id, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/V2/module/${id}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const modulesDetails = createSlice({
    name: "modulesDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getModulesDetails.pending, (state) => {
            state.error = null
        })
        builder.addCase(getModulesDetails.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getModulesDetails.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default modulesDetails.reducer
