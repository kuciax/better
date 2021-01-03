import { SIGN_IN } from "./actions";

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  token: string;
}

export const initialiState = {
  token: "",
};

const todos = (state: IState = initialiState, action: IAction): IState => {
  switch (action.type) {
    case SIGN_IN: {
      return { token: action.payload };
    }
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof todos>;

export default todos;
