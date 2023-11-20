import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Search } from "../types/RootState";

const initialState: Search = {
    searchValue: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
    },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
