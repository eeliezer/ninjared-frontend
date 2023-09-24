import { createSlice } from "@reduxjs/toolkit";
import { TotalProducts, products } from "../../data";

const INITIAL_STATE = {
 products,
 totalProducts: TotalProducts,
};

export const productsSlice = createSlice({
 name: 'products',
 initialState: INITIAL_STATE,
 reducers: {
   getProducts: state => {
    return state;
   }
 }
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;