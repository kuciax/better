import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMediaList } from "../../service/media";
import MediaList from "../Media";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMediaList());
  });

  return (
    <div>
      <MediaList />
    </div>
  );
};

export default Home;
