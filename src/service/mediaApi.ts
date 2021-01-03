import axios from "axios";
import { getMediaListSucess } from "../store/actionCreators";
import { IMedia } from "../types/Media";

interface IGetMediaList {
  token: string;
}

const url = "https://thebetter.bsgroup.eu/Media/GetMediaList";

const getHeaders = (token: string) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: token,
  //   Authorization: `eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.JcyjbTbyZoloKqjb-C9mT2TAKSywB6sbSbcJZp2ZJ7R38ztXT1R8wQ.Eg4WV8aQC84HjY3FKI3HcQ.ZTrNIfHMvNJajtoiN6AatwGs_rlFVAb3Tl-wpYix19jgJUYZyN4VRu6taGhJ6e0tB4Wl05Q1OpW_BoAQJwcPzizZvVGjLcUMi641rFEZfz1OLbDa9-m66FKqAgMzzY1efqbC29bC1VqW7dWNP50pbn_9JMejn2TxPOcYXr-npivi65nwEKIcM8vvrttiSgD2wKNQhaB6TnKlut8VqyRXldgq27gsPXOBTFJwleM7zFkt7-YWBukwlnW-tOvcNN9WNzr9P8RrgF8UbbQCYpfL2vbUF8Ri3mXOMEbgOGj9xKwYEPcQUdYjSyy5eLGDYa_x23Ffy13RNr0iHFnP3Q0n04VhH2s2tlrE777s5jyU276AoK7_q5yw-Vh5gLBsUs3HTgFsdS8yPAwIRJesph6zY4_JznSDNVmZ1bSxLNKrGFH-L2ISwchHn8XfHaohd8Vcadko8aRjLvJsYGTyRc1i1sZgMH3qDg6KrjI5fYwauzgZBd4csIG-Y74sS1YtIUYpCsiZ2jqdHtzz_4NG8c0-__Ulj_wRhSbXzc1MZHPzbutekEaL89LEiEFvcHPWrLEwfx4ZWurrpIfma6zOiIcWyQ.x3qAQdB8Scrgfvwu2JiftQ`,
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
  const request = await axios.post(
    url,
    { ...data },
    { headers: getHeaders(token) }
  );

  const mapImages = (Images: any) =>
    Images.map(({ ImageTypeCode, Url }: any) => ({
      type: ImageTypeCode,
      url: Url,
    }));

  const mappedData: IMedia = request.data.Entities.map(
    ({ Title, Description, Images }: any) => ({
      title: Title,
      description: Description,
      images: mapImages(Images),
    })
  );

  return dispatch(getMediaListSucess(mappedData));
};
