import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Pizza } from "../types/RootState";

interface PizzasState {
    pizzasArray: Pizza[];
}

const initialState: PizzasState = {
    pizzasArray: [],
};

export const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setPizzasArray: (state, action: PayloadAction<Pizza[]>) => {
            state.pizzasArray = action.payload;
        },
    },
});

export const { setPizzasArray } = pizzasSlice.actions;

export default pizzasSlice.reducer;
