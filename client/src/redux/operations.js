import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/heroes";

// GET @ /
export const fetchHeroes = createAsyncThunk(
  "heroes/fetchAll",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/", {
        params: { page, limit: "5" },
      });

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /hero
export const addHero = createAsyncThunk(
  "heroes/addHero",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/hero", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updatehero = createAsyncThunk(
  "heroes/updatehero",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(`/hero/${data.id}`, data.updateData);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /hero/:id
export const deleteHero = createAsyncThunk(
  "heroes/deleteHero",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/hero/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
