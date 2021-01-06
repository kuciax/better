import { IEntityApi } from "../type/api/EntityApi";
import { IImageApi } from "../type/api/ImageApi";
import { IMedia } from "../type/Media";
import { fetchMediaList, fetchMediaPlayInfo } from "./api/mediaApi";
import { getToken } from "./localStorage";

export const getMediaList = async (
  mediaListId: number
): Promise<IMedia[] | undefined> => {
  const token = getToken();
  if (token) {
    const request = await fetchMediaList(token.value, mediaListId);

    const mapImages = (Images: IImageApi[]) =>
      Images.map(({ ImageTypeCode, Url }: IImageApi) => ({
        type: ImageTypeCode,
        url: Url,
      }));

    const mappedData = request?.data?.Entities.map(
      ({ Title, Description, Images, Id }: IEntityApi) => ({
        title: Title,
        description: Description,
        images: mapImages(Images),
        mediaId: Id,
      })
    );
    return mappedData;
  }
};

export const getMediaPlayInfo = async (
  mediaId: string
): Promise<string | undefined> => {
  const token = getToken();
  if (token) {
    const request = await fetchMediaPlayInfo(token.value, mediaId);
    return request?.data?.ContentUrl;
  }
};
