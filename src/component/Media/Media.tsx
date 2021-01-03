import styled from "styled-components";
import { IMedia } from "../../types/Media";

interface IMediaProps {
  media: IMedia;
  className?: string;
}

const Media = ({ media, className }: IMediaProps) => {
  const { title, images } = media;
  const url = images.find(({ type }) => type === "FRAME")?.url;
  return (
    <div className={className}>
      <div className="container">
        <img src={url} />
        <div className="title">{title}</div>
      </div>
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
`;

export default StyledMedia;
