import axios from "axios";

const url = "https://thebetter.bsgroup.eu/Media/GetMediaList";
const urlInfo = "https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo";

const getHeaders = (token: string) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
});

const data = {
  MediaListId: 2,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 10,
};

export const fetchMediaList = (tokenValue: string) =>
  axios.post(url, { ...data }, { headers: getHeaders(tokenValue) });

export const fetchMediaPlayInfo = (tokenValue: string, mediaId: string) =>
  axios.get(urlInfo, { headers: getHeaders(tokenValue), params: { mediaId } });
