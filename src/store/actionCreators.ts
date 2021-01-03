import { SIGN_IN } from "./actions";

export const signInSucess = (payload: string) => ({
  type: SIGN_IN,
  payload,
});
