import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../bases/baseUrl";

export const getAllactualites = createAsyncThunk("actualites/getData", async (arg, {
    rejectWithValue
}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/actualites`);
        return data;
    } catch (error) {
        rejectWithValue(error.response);
    }
});

export const actualitesSlice = createSlice({
    name: "actualites",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {

        [getAllactualites.pending]: (state, { payload }) => {
            state.loading = true;
            state.isSuccess = false;
        },
        [getAllactualites.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.value = payload;
            state.isSuccess = true;
        },
        [getAllactualites.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
        },
    }
});

export default actualitesSlice;