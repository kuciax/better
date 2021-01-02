import { createStore, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todos, { IAction, IState } from "./reducer";

const store: Store<IState, IAction> = createStore(
  todos,
  applyMiddleware(thunk)
);

export default store;
