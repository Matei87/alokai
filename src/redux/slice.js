import { createSlice } from '@reduxjs/toolkit';
import { rememberReducer } from 'redux-remember';
import data from './data.json';

const initialState = {
  products: data,
  cart: [],
};

const mainSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeAllProducts: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeProductFromCart, removeAllProducts } =
  mainSlice.actions;

// export default mainSlice.reducer;

const mainReducer = {
  mainSlice: mainSlice.reducer,
};

// export const mainAction = {
//   ...mainSlice.actions,
// };

export const rememberedState = ['mainSlice'];
export const reducer = rememberReducer(mainReducer);
