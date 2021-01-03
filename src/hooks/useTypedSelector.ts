import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer";

const useTypedSelector = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  return useTypedSelector;
};

export default useTypedSelector;
