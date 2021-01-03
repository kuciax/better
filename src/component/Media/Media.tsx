import styled from "styled-components";
import { IMedia } from "../../types/Media";

interface IMediaProps {
  media: IMedia;
  className?: string;
}

const Media = ({ media, className }: IMediaProps) => {
  const { title, description, images } = media;
  const url = images.find(({ type }) => type === "FRAME")?.url;
  console.log(url);
  return (
    <div className={className}>
      <div className="container">
        <img src={url} alt={description} width="600" height="400" />
        <div className="top-left">{title}</div>
      </div>
    </div>
  );
};

const StyledMedia = styled(Media)`
  .container {
    position: relative;
    text-align: center;
    color: white;
    .top-left {
      position: absolute;
      top: 8px;
      left: 16px;
    }
  }
`;

export default StyledMedia;
