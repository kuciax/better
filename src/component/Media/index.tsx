import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMediaList } from "../../service/media";
import { IMedia } from "../../types/Media";
import Media from "./Media";

interface IMediaList {
  className?: string;
}

const MediaList = ({ className }: IMediaList) => {
  const [mediaListFirst, setMediaListFirst] = useState<IMedia[]>([]);
  const [mediaListSecond, setMediaListSecond] = useState<IMedia[]>([]);

  const fetchMediaFirstLists = async () => {
    const mediaListFirtFetched = await getMediaList();
    setMediaListFirst(mediaListFirtFetched);
  };

  const fetchMediaSecondLists = async () => {
    const mediaListSecondFetched = await getMediaList();
    setMediaListSecond(mediaListSecondFetched);
  };

  useEffect(() => {
    fetchMediaFirstLists();
  }, []);

  useEffect(() => {
    fetchMediaSecondLists();
  }, []);

  return (
    <div className={className}>
      <div>
        {mediaListFirst?.map((media, index) => (
          <Media media={media} key={index} />
        ))}
      </div>
      <div>
        {mediaListSecond?.map((media, index) => (
          <Media media={media} key={index} />
        ))}
      </div>
    </div>
  );
};

const StyledMediaList = styled(MediaList)`
  display: flex;
  justify-content: space-between;
`;

export default StyledMediaList;
