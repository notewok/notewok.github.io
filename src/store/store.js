import { configureStore } from '@reduxjs/toolkit'
import figmaReducer from './index';

export const store = configureStore({
  reducer: {
    figmaStyles: figmaReducer,
  },
})