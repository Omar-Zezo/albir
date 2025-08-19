import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getProjects = createAsyncThunk(
    "home/getProjects", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/V2/multiple-value-services")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const projects = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProjects.pending, (state) => {
            state.error = null
        })
        builder.addCase(getProjects.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getProjects.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default projects.reducer
