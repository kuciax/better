import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMediaList } from "../../service/mediaApi";
import { IState } from "../../store/reducer";
import MediaList from "../Media";
const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: IState) => state.token);
  useEffect(() => {
    dispatch(getMediaList({ token }));
  });

  return (
    <div>
      <MediaList />
    </div>
  );
};

export default Home;
