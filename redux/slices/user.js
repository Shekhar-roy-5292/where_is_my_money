import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  userLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserLoadaing: (state, action) => {
      state.userLoading = action.payload;
    },
  },
});

export const {setUser, setUserLoadaing} = userSlice.actions;
export default userSlice.reducer;
