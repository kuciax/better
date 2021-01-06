import { useState } from "react";
import styled from "styled-components";
import { IMedia } from "../../type/Media";
import Player from "../Player";
import { Modal } from "@material-ui/core";

interface IMediaProps {
  media: IMedia;
  className?: string;
}

const MediaIcon = ({ media, className }: IMediaProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  const { title, images, mediaId } = media;
  const url = images.find(({ type }) => type === "FRAME")?.url;
  return (
    <div className={className}>
      <div className="container" onClick={handleOpen}>
        {url ? <img alt={title} src={url} /> : <div className="placeholder" />}
        <div className="title">{title}</div>
      </div>
      {open && (
        <Modal
          open={open}
          onClose={handleOpen}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {/*  because of ref warning */}
          <>
            <Player mediaId={mediaId} className="player" />
          </>
        </Modal>
      )}
    </div>
  );
};

const StyledMediaIcon = styled(MediaIcon)`
  img {
    border-radius: 8px;
    width: 240px;
    height: 135px;
  }
  .placeholder {
    border-radius: 8px;
    background-color: gray;
    width: 240px;
    height: 135px;
  }
  .title {
    text-align: left;
  }
  .modal {
    display: "flex";
    justify-content: "center";
    align-items: center;
  }
  .paper {
    border: "2px solid #000";
  }
  .container {
    :hover {
      cursor: pointer;
      opacity: 0.3;
    }
    .player {
      position: absolute;
      width: 400 px;
    }
  }
`;

export default StyledMediaIcon;
