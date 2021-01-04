import { fetchSignIn } from "./api/userApi";
import { setToken } from "./localStorage";

// TODO Add types to API

export const signIn = async (userName: string, password: string) => {
  const request = await fetchSignIn(userName, password);
  const { Token, TokenExpires } = request.data.AuthorizationToken;
  setToken(Token, TokenExpires);
};
