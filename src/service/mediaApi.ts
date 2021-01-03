import axios from "axios";
import { getMediaListSucess } from "../store/actionCreators";

interface IGetMediaList {
  token: string;
}

const url = "https://thebetter.bsgroup.eu/Media/GetMediaList";

const getHeaders = (token: string) => ({
  "Content-Type": "application/json",
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

export const getMediaList = ({ token }: IGetMediaList) => async (
  dispatch: any
) => {
  const request = await axios.post(url, { headers: getHeaders(token), data });
  return dispatch(getMediaListSucess(request.data));
};
