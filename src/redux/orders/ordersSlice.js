import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  orders: null,
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    fetchOrdersStart: state => {
      return {
        ...state,
        loading: true,
      };
    },
    fetchOrdersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    },
    fetchOrdersFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    createOrderFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearError: state => {
      return {
        ...state,
        error: null,
      };
    },
    clearOrders: state => {
      return {
        ...state,
        orders: null,
      };
    },
  },
});

export const {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  createOrderFailure,
  clearError,
  clearOrders,
} = ordersSlice.actions;

export default ordersSlice.reducer;
