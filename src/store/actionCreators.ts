import { IMedia } from "../types/Media";
import { GET_MEDIA_LIST, SIGN_IN } from "./actions";

export const signInSucess = (payload: string) => ({
  type: SIGN_IN,
  payload,
});

export const getMediaListSucess = (payload: IMedia) => ({
  type: GET_MEDIA_LIST,
  payload,
});
