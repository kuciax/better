import { createStore, Store } from "redux";
import todos, { IAction, initialiState, IState } from "./reducer";

const store: Store<IState, IAction> = createStore(todos, initialiState);

export default store;
