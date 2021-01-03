import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getMediaPlayInfo } from "../../service/mediaApi";

interface IPlayerProps {
  className?: string;
  mediaId: string;
}

const Player = ({ className, mediaId }: IPlayerProps) => {
  const [url, setUrl] = useState("");

  const fetchMediaPlayerInfo = async () => {
    const url = await getMediaPlayInfo(mediaId);
    setUrl(url);
  };

  useEffect(() => {
    fetchMediaPlayerInfo();
  });

  return (
    <div className={className}>
      <ReactPlayer playing controls url={url} width="50%" height="50%" />
    </div>
  );
};

const StyledPlayer = styled(Player)`
  justify-content: center;
  display: flex;
  padding-top: 40px;
`;

export default StyledPlayer;
