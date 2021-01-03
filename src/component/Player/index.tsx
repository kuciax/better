import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { getMediaPlayInfo } from "../../service/mediaApi";
import { IState } from "../../store/reducer";

interface IPlayerProps {
  className?: string;
  mediaId: string;
}

const Player = ({ className, mediaId }: IPlayerProps) => {
  const [url, setUrl] = useState("");

  const token = useSelector((state: IState) => state.token);

  const fetchMediaPlayerInfo = async () => {
    const url = await getMediaPlayInfo(mediaId, token);
    setUrl(url);
  };

  useEffect(() => {
    fetchMediaPlayerInfo();
  });

  return (
    <div className={className}>
      <ReactPlayer
        playing
        controls
        className="react-player"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
};

const StyledPlayer = styled(Player)``;

export default StyledPlayer;
