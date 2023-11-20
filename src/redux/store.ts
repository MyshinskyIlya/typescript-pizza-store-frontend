import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import pizzasReducer from "./slices/pizzasSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        search: searchReducer,
        cart: cartReducer,
        pizzas: pizzasReducer,
    },
});
