import { createSlice } from "@reduxjs/toolkit";

import { fetchHeroes, addHero, deleteHero, updatehero } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;

  state.error = action.payload;
};

const heroSlice = createSlice({
  name: "heroes",
  initialState: {
    items: [],
    pages: 0,
    isLoading: false,

    error: null,
  },
  extraReducers: {
    [fetchHeroes.pending]: handlePending,
    [addHero.pending]: handlePending,
    [updatehero.pending]: handlePending,
    [deleteHero.pending]: handlePending,
    [fetchHeroes.rejected]: handleRejected,
    [addHero.rejected]: handleRejected,
    [updatehero.rejected]: handleRejected,
    [deleteHero.rejected]: handleRejected,
    [fetchHeroes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.heroes;
      state.pages = action.payload.totalPages;
    },
    [addHero.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [action.payload];
    },
    [updatehero.fulfilled](state, action) {
      state.isLoading = false;

      state.error = null;
      const index = state.items.findIndex(
        (hero) => hero.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [deleteHero.fulfilled](state, action) {
      state.isLoading = false;

      state.error = null;
      const index = state.items.findIndex(
        (hero) => hero.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const heroReducer = heroSlice.reducer;
