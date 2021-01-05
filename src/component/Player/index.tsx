import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getMediaPlayInfo } from "../../service/media";

interface IPlayerProps {
  className?: string;
  mediaId: string;
  onClose: () => void;
}

const Player = ({ className, mediaId, onClose }: IPlayerProps) => {
  const [url, setUrl] = useState("");
  const [urlFetchError, setUrlFetchError] = useState(false);

  const fetchMediaPlayerInfo = async () => {
    try {
      const url = await getMediaPlayInfo(mediaId);
      setUrl(url);
    } catch (error) {
      setUrlFetchError(true);
    }
  };

  useEffect(() => {
    fetchMediaPlayerInfo();
  }, []);

  const displayPlayer = url && !urlFetchError;

  return (
    <div className={className}>
      {displayPlayer && (
        <ReactPlayer
          className="react-player"
          playing={true}
          controls={true}
          url={url}
          width="50%"
          height="50%"
        />
      )}
      {urlFetchError && <div className="no-content"> NO CONTENT</div>}
      {displayPlayer && (
        <span onClick={onClose} className="close">
          &times;
        </span>
      )}
    </div>
  );
};

const StyledPlayer = styled(Player)`
  justify-content: center;
  display: flex;
  padding-top: 40px;
  .no-content {
    background-color: wheat;
  }
  .close {
    color: black;
    font-size: 28px;
    font-weight: bold;
  }
  .close:hover {
    cursor: pointer;
  }
`;

export default StyledPlayer;
