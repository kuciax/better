import axios, { AxiosResponse } from "axios";
import { IMediaListApi } from "../../type/api/MediaListApi";
import { IMediaPlayInfoApi } from "../../type/api/MediaPlayInfoApi";

const mediaUrl = "https://thebetter.bsgroup.eu/Media";

const getHeaders = (token: string): Record<string, string> => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
});

const getData = (
  mediaListId: number
): Record<string, boolean | string | number> => ({
  MediaListId: mediaListId,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 15,
});

export const fetchMediaList = (
  tokenValue: string,
  mediaListId: number
): Promise<AxiosResponse<IMediaListApi>> =>
  axios.post<IMediaListApi>(
    `${mediaUrl}/GetMediaList`,
    { ...getData(mediaListId) },
    { headers: getHeaders(tokenValue) }
  );

export const fetchMediaPlayInfo = (
  tokenValue: string,
  mediaId: string
): Promise<AxiosResponse<IMediaPlayInfoApi>> =>
  axios.get<IMediaPlayInfoApi>(`${mediaUrl}/GetMediaPlayInfo`, {
    headers: getHeaders(tokenValue),
    params: { mediaId },
  });
