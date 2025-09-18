import { createSlice } from "@reduxjs/toolkit";

const ACCOUNT_INITIAL_STATE = {
  isAccountOpen: false,
  isSignedIn: false,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState: ACCOUNT_INITIAL_STATE,
  reducers: {
    setIsAccountOpen(state, action) {
      state.isAccountOpen = action.payload
    },

    setIsSignedIn(state, action) {
      state.isSignedIn = action.payload
    }
  }
})

//replaces the action
export const { setIsAccountOpen, setIsSignedIn } = accountSlice.actions;

//generates the reducer
export const accountReducer = accountSlice.reducer;

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       return state;
//   }
// };