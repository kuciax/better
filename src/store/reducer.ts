import { IMedia } from "../types/Media";
import { GET_MEDIA_LIST, SIGN_IN } from "./actions";

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  token: string;
  medias: IMedia[] | null;
}

export const initialiState = {
  token: "",
  medias: null,
};

const todos = (state: IState = initialiState, action: IAction): IState => {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, token: action.payload };
    }
    case GET_MEDIA_LIST: {
      return { ...state, medias: action.payload };
    }
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof todos>;

export default todos;
