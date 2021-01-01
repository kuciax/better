export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  todo: string[];
}

export const initialiState = {
  todo: ["init"],
};

const todos = (state: IState = initialiState, action: IAction): IState => {
  switch (action.type) {
    case "ADD_TODO":
      return { todo: action.payload };
    default:
      return state;
  }
};

export default todos;
