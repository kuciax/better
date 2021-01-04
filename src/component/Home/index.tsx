import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMediaList } from "../../service/media";
import { IMedia } from "../../type/Media";
import MediaSlider from "../MediaSlider";

interface IMediaList {
  className?: string;
}

const Home = ({ className }: IMediaList) => {
  // TODO change naming
  const [mediaListFirst, setMediaListFirst] = useState<IMedia[]>([]);
  const [mediaListSecond, setMediaListSecond] = useState<IMedia[]>([]);

  const fetchMediaFirstLists = async () => {
    const mediaListFirtFetched = await getMediaList(2);
    if (mediaListFirtFetched) {
      setMediaListFirst(mediaListFirtFetched);
    }
  };

  const fetchMediaSecondLists = async () => {
    const mediaListSecondFetched = await getMediaList(3);
    if (mediaListSecondFetched) {
      setMediaListSecond(mediaListSecondFetched);
    }
  };

  useEffect(() => {
    fetchMediaFirstLists();
  }, []);

  useEffect(() => {
    fetchMediaSecondLists();
  }, []);

  return (
    <div className={className}>
      <MediaSlider mediaList={mediaListFirst} title="Top 10 Poland" />
      <MediaSlider mediaList={mediaListSecond} title="Top 10 UK" />
    </div>
  );
};

const StyledHome = styled(Home)`
  display: flex;
  flex-direction: column;
`;

export default StyledHome;
