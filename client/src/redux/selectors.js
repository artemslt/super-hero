export const selectLoading = (state) => state.heroes.isLoading;

export const getError = (state) => state.heroes.error;

export const selectAllHeroes = (state) => state.heroes.items;

export const pagesCount = (state) => state.heroes.pages;
