import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

import { Cart, CartPizza } from "../types/RootState";
import { getCardFromLS } from "../../utils/getCardfFromLS";

const { items, totalPrice } = getCardFromLS();

const initialState: Cart = {
    items: items,
    totalPrice: totalPrice,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartPizza>) => {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload
            );
            state.totalPrice = calcTotalPrice(state.items);
        },

        addItemCount: (state, action: PayloadAction<number>) => {
            const selectedItem = state.items.find(
                (i) => i.id === action.payload
            );

            if (selectedItem) {
                selectedItem.count++;
                state.totalPrice = calcTotalPrice(state.items);
            }
        },

        removeItemCount: (state, action: PayloadAction<number>) => {
            const selectedItem = state.items.find(
                (i) => i.id === action.payload
            );

            if (selectedItem) {
                selectedItem.count--;
                state.totalPrice = calcTotalPrice(state.items);

                if (selectedItem.count < 1) {
                    state.items = state.items.filter(
                        (obj) => obj.id !== action.payload
                    );
                }
            }
        },

        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const {
    addItem,
    removeItem,
    clearItems,
    addItemCount,
    removeItemCount,
} = cartSlice.actions;

export default cartSlice.reducer;
