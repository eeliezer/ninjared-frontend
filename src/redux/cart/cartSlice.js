import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING_COST } from "../../utils/constants";
import { addItemsToCart, removeItemFromCart, resetShippingCost } from "./cart-utils";

const INITIAL_STATE = {
 shippingCost: 0,
 cartItems: [],
 hidden: true,
}

const cartSlice = createSlice({
 name: 'cart',
 initialState: INITIAL_STATE,
 reducers: {
   addToCart: (state, action) => {
    return {
     ...state,
     cartItems: addItemsToCart(state.cartItems, action.payload),
     shippingCost: SHIPPING_COST,
    };
   },
   removeFromCart: (state, action) => {
    return {
     ...state,
     cartItems: removeItemFromCart(state.cartItems, action.payload),
     shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
    };
   },
   clearCart: (state) => {
    return {
     ...state,
     cartItems: [],
     shippingCost: 0,
    }
   },
   toggleHiddenCart: state => {
    return {
     ...state,
     hidden: !state.hidden,
    }
   }
 }
})

export const { addToCart, removeFromCart, clearCart, toggleHiddenCart } = cartSlice.actions;

export default cartSlice.reducer;