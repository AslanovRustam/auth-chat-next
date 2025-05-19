import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {},
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
