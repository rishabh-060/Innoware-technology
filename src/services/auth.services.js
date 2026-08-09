import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../axios/axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser", // action type
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/users/register", userData);
      return response.data; // success payload
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/users/login", userData);
      return response.data; // success payload
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
)

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/users/logout");
      return true; // success payload
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
)