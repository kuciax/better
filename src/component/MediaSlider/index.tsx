import styled from "styled-components";
import { IMedia } from "../../type/Media";
import MediaIcon from "../MediaIcon";
import { Typography } from "@material-ui/core";

interface IMediaSlider {
  mediaList: IMedia[];
  className?: string;
  title?: string;
}

// TODO make it responsible

const MediaSlider = ({ mediaList, className, title }: IMediaSlider) => (
  <div className={className}>
    {title && (
      <Typography className="title" variant="h5">
        {title}
      </Typography>
    )}
    <div className="slider">
      {mediaList?.map((media: IMedia, index: number) => (
        <MediaIcon className="slide-item" media={media} key={index} />
      ))}
    </div>
  </div>
);

const StyledMediaSlider = styled(MediaSlider)`
  .title {
    text-align: left;
  }

  .facet_sidebar {
    display: none;
  }

  .slider {
    padding: 0px 5px 0 5px;
    max-width: 1024px;
    display: flex;
    overflow-x: auto;
  }
  .slide-item {
    margin: 5px;
  }
`;

export default StyledMediaSlider;
