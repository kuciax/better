import { IImageApi } from "./ImageApi";

export interface IEntityApi {
    Title: string;
    Description: string;
    Images: IImageApi[];
    Id: string;
  }