import { useState } from "react";
import styled from "styled-components";
import { IMedia } from "../../types/Media";
import Player from "../Player";
import { Modal } from "@material-ui/core";

interface IMediaProps {
  media: IMedia;
  className?: string;
}

const Media = ({ media, className }: IMediaProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  const { title, images, mediaId } = media;
  const url = images.find(({ type }) => type === "FRAME")?.url;
  return (
    <div className={className}>
      <div className="container" onClick={handleOpen}>
        <img alt={title} src={url} />
        <div className="title">{title}</div>
      </div>
      {open && (
        <Modal
          open={open}
          onClose={()=>setOpen(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Player mediaId={mediaId} />
        </Modal>
      )}
    </div>
  );
};

const StyledMedia = styled(Media)`
  img {
    width: 480px;
    height: 270px;
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
`;

export default StyledMedia;
