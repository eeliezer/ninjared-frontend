import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../data";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    selectCategory: (state, action) => {
      const newState = {
        ...state,
        selectedCategory:
          action.payload === state.selectedCategory ? null : action.payload,
      }
      console.log(newState);
      return {
        ...state,
        selectedCategory:
          action.payload === state.selectedCategory ? null : action.payload,
      };
    },
    categories: state => {
      return state;
    }, 
  },
});

export const { categories, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;