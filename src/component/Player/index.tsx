import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getMediaPlayInfo } from "../../service/media";
import { isTokenValid } from "../../service/localStorage";
import { useHistory } from "react-router";
import route from "../../constant/routes";

interface IPlayerProps {
  className?: string;
  mediaId: string;
}

const Player = ({ className, mediaId }: IPlayerProps) => {
  const history = useHistory();
  const [url, setUrl] = useState("");
  const [urlFetchError, setUrlFetchError] = useState(false);

  const fetchMediaPlayerInfo = async () => {
    if (isTokenValid()) {
      try {
        const url = await getMediaPlayInfo(mediaId);
        url && setUrl(url);
      } catch (error) {
        setUrlFetchError(true);
      }
    } else history.push(route.login);
  };

  useEffect(() => {
    fetchMediaPlayerInfo();
  }, []);

  const displayPlayer = url && !urlFetchError;

  return (
    <div className={className}>
      {displayPlayer && (
        <ReactPlayer
          playing={true}
          controls={true}
          url={url}
          width="100%"
          height="100%"
        />
      )}
      {urlFetchError && <div className="no-content"> NO CONTENT OR NOT BOUGHT</div>}
    </div>
  );
};

const StyledPlayer = styled(Player)`
  justify-content: center;
  display: flex;
  padding-top: 40px;
  position: absolute;
  width: 640px;
  height: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .no-content {
    width: 100%;
    background-color: wheat;
  }
`;

export default StyledPlayer;
