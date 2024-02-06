// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import heroPageReducer from './reducers/heroPageReducer';

const store = configureStore({
  reducer: {
    heroPage: heroPageReducer,
  },
});

export default store;
