import { createSlice } from "@reduxjs/toolkit";

const authSLice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading:(state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = authSLice.actions;
export default authSLice.reducer;
