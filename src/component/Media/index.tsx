import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../store/reducer";
import Media from "./Media";

interface IMediaList {
  className?: string;
}

const MediaList = ({ className }: IMediaList) => {
  const medias = useSelector(({ medias }: IState) => medias);
  console.log(medias)
  return (
    <div className={className}>
      {medias?.map((media, index) => (
        <Media media={media} key={index} />
      ))}
    </div>
  );
};

const StyledMediaList = styled(MediaList)``;

export default StyledMediaList;
