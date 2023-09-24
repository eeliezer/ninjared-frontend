import { createSlice } from '@reduxjs/toolkit';
import Input from '../../components/UI/Input/Input';

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      /*       console.log(state); */
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    setPassword: state => {
      if (!state.currentUser) {
        state.currentUser.password = Input.value;
      }
    },
    setVerified: state => {
      if (state.currentUser) {
        state.currentUser.verified = true;
      }
    },
    toggleHiddenMenu: state => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
    },
  },
});

export const { setCurrentUser, setPassword, toggleHiddenMenu, setVerified } =
  userSlice.actions;

export default userSlice.reducer;
