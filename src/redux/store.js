import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User';
import themeReducer from './Theme';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
export default store;
