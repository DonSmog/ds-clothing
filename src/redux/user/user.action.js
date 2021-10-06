import { UserActionTypes } from "./user.types";

export const setCurrentUSer = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
