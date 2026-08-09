import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../axios/axios";


export const contactUs = createAsyncThunk(
    "contact-us", // action type
    async (messageData, { rejectWithValue }) => {
        try {
        const response = await api.post("/public/contact-us", messageData);
        return response.data; // success payload
        } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || "Something went wrong"
        );
        }
    }
);