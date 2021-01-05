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
          <Player mediaId={mediaId} onClose={handleOpen} />
        </Modal>
      )}
    </div>
  );
};

const StyledMediaIcon = styled(MediaIcon)`
  img {
    border-radius: 8px;
    width: 320px;
    height: 180px;
  }
  .placeholder {
    border-radius: 8px;
    background-color: gray;
    width: 320px;
    height: 180px;
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
  }
`;

export default StyledMediaIcon;
