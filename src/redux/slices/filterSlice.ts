import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Filter } from "../types/RootState";

const initialState: Filter = {
    categoryId: 0,
    sortId: 0,
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSortId: (state, action: PayloadAction<number>) => {
            state.sortId = action.payload;
        },
        setFilters: (state, action: PayloadAction<qs.ParsedQs>) => {
            state.categoryId = Number(action.payload.categoryId);
            state.sortId = Number(action.payload.sortId);
        },
    },
});

export const { setCategoryId, setSortId, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
