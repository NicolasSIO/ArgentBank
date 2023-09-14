import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    credentials: {
      firstName: "",
      lastName: "",
    },
  },
  reducers: {
    setData: (state, action) => {
      state.credentials = action.payload;
    },
  },
});

export const mainStore = configureStore({
  reducer: {
    User: userSlice.reducer,
  },
});
