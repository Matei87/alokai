import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import rootReducer from './reducer';
import { rememberEnhancer } from 'redux-remember';
import { reducer, rememberedState } from './slice';

// const store = configureStore({
//   reducer: {
//     root: rootReducer,
//   },
// });

// setupListeners(store.dispatch);
// export default store;

const store = configureStore({
  reducer,
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedState)
    ),
});

setupListeners(store.dispatch);

export default store;
