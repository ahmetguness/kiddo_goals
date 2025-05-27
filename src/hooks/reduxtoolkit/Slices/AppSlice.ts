import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  userMode: "" | "Parent" | "Child" | "Guest";
}

const initialState: AppState = {
  userMode: "",
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedLoginType: (
      state,
      action: { payload: "" | "Parent" | "Child" | "Guest" }
    ) => {
      state.userMode = action.payload;
    },
  },
});

export default AppSlice.reducer;
export const { setSelectedLoginType } = AppSlice.actions;
