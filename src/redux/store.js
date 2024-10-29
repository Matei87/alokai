import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import productsReducer from './slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

setupListeners(store.dispatch);

export default store;
