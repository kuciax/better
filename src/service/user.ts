import { fetchSignIn } from "./api/userApi";
import { setToken } from "./localStorage";

export const signIn = async () => {
  const request = await fetchSignIn();
  const { Token, TokenExpires } = request.data.AuthorizationToken;
  setToken(Token, TokenExpires);
};
