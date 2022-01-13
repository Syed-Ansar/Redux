import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', email: '', age: 0 };

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
