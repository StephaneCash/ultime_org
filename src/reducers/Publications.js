import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../bases/baseUrl";

export const getAllPubs = createAsyncThunk("publications/getData", async (arg, {
    rejectWithValue
}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/publications`);
        return data;
    } catch (error) {
        rejectWithValue(error.response);
    }
});


export const publicationSlice = createSlice({
    name: "publications",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {

        [getAllPubs.pending]: (state, { payload }) => {
            state.loading = true;
            state.isSuccess = false;
        },
        [getAllPubs.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.value = payload;
            state.isSuccess = true;
        },
        [getAllPubs.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
        },
    }
});

export default publicationSlice;