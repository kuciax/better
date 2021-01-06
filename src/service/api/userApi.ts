import axios, { AxiosResponse } from "axios";
import { ISignIn } from "../../type/api/SignInApi";

const url = "https://thebetter.bsgroup.eu/Authorization/SignIn";

const headers = {
  "Content-Type": "application/json",
};

const getData = (
  username: string,
  password: string
): Record<string, string> => ({
  Username: username,
  Password: password,
});

export const fetchSignIn = (
  username: string,
  password: string
): Promise<AxiosResponse<ISignIn>> =>
  axios.post<ISignIn>(url, { ...getData(username, password) }, { headers });
