import { IMedia } from "../type/Media";
import { fetchMediaList, fetchMediaPlayInfo } from "./api/mediaApi";
import { getToken } from "./localStorage";

 // TODO Add types to API

export const getMediaList = async (mediaListId: number) => {
  const token = getToken();
  if (token) {
    const request = await fetchMediaList(token.value, mediaListId);

    const mapImages = (Images: any) =>
      Images.map(({ ImageTypeCode, Url }: any) => ({
        type: ImageTypeCode,
        url: Url,
      }));

    const mappedData: IMedia[] = request?.data?.Entities.map(
      ({ Title, Description, Images, Id }: any) => ({
        title: Title,
        description: Description,
        images: mapImages(Images),
        mediaId: Id,
      })
    );

    return mappedData;
  }
};

export const getMediaPlayInfo = async (mediaId: string) => {
  const token = getToken();
  if (token) {
    const request = await fetchMediaPlayInfo(token.value, mediaId);
    return request?.data?.ContentUrl;
  }
};
