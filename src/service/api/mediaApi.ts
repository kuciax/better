import axios from "axios";

const mediaUrl = "https://thebetter.bsgroup.eu/Media";

const getHeaders = (token: string) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
});

const getData = (mediaListId: number) => ({
  MediaListId: mediaListId,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 15,
});

export const fetchMediaList = (tokenValue: string, mediaListId: number) =>
  axios.post(
    `${mediaUrl}/GetMediaList`,
    { ...getData(mediaListId) },
    { headers: getHeaders(tokenValue) }
  );

export const fetchMediaPlayInfo = (tokenValue: string, mediaId: string) =>
  axios.get(`${mediaUrl}/GetMediaPlayInfo`, {
    headers: getHeaders(tokenValue),
    params: { mediaId },
  });