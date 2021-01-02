import { SIGN_IN } from "./actions";

export const signInSucess = (payload: any) => ({
  type: SIGN_IN,
  payload,
});
