import { GET_MEDIA_LIST, SIGN_IN } from "./actions";

export const signInSucess = (payload: string) => ({
  type: SIGN_IN,
  payload,
});

export const getMediaListSucess = (payload: any) => ({
  type: GET_MEDIA_LIST,
  payload,
});
