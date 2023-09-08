import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./services/userSlice";
import apiSlice from "./services/apiSlice";

const store = configureStore({
  reducer: {
    authSlice: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
