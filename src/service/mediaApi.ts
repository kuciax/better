import { getMediaListSucess } from "../store/actionCreators";
import { IMedia } from "../types/Media";
import { fetchMediaList } from "./api/mediaApi";
import { getToken } from "./localStorage";

export const getMediaList = () => async (dispatch: any) => {
  const token = getToken();
  const request = await fetchMediaList(token?.value);

  const mapImages = (Images: any) =>
    Images.map(({ ImageTypeCode, Url }: any) => ({
      type: ImageTypeCode,
      url: Url,
    }));

  const mappedData: IMedia = request.data.Entities.map(
    ({ Title, Description, Images, Id }: any) => ({
      title: Title,
      description: Description,
      images: mapImages(Images),
      mediaId: Id,
    })
  );

  return dispatch(getMediaListSucess(mappedData));
};

export const getMediaPlayInfo = async (mediaId: string) => {
  // TODO fix api

  // const request = await axios.get(
  //   urlInfo,
  //   { headers: getHeaders(token), params: { mediaId} }
  // );
  // return request.data.ContentUrl;
  return "https://cd-stream-od.telenorcdn.net/tnfbaod/SF/585db4b3e4b09db0cf348a64/dash_a1.ism/playlist.mpd";
};
