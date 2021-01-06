import { fetchSignIn } from "./api/userApi";
import { setToken } from "./localStorage";

export const signIn = async (
  userName: string,
  password: string
): Promise<void> => {
  const request = await fetchSignIn(userName, password);
  const { Token, TokenExpires } = request.data.AuthorizationToken;
  setToken(Token, TokenExpires);
};
