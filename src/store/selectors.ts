import { RootState } from ".";

export const selectToken = (state: RootState) => state.user.token;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;
export const selectisUserAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
