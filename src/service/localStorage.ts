const key = "better";

export const setToken = (token: string, tokenExpires: string) => {
  localStorage.setItem(
    key,
    JSON.stringify({ value: token, expires: new Date(tokenExpires) })
  );
};

export const getToken = () => {
  const token = localStorage.getItem(key);
  if (token) {
    return JSON.parse(token);
  }
};

export const isTokenValid = () => {
  const token = getToken();
  const nowTime = new Date().getTime();
  if (token) {
    const currentTokenTime = new Date(token.expires).getTime();
    return !!(currentTokenTime - nowTime);
  }
  return false;
};
