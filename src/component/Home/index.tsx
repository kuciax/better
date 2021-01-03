import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMediaList } from "../../service/mediaApi";
import { IState } from "../../store/reducer";
const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: IState) => state.token);
  useEffect(() => {
    dispatch(getMediaList({token}));
  });

  const state = useSelector((state) => state);
  return <div>{JSON.stringify(state)}</div>;
};

export default Home;
