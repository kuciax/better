import axios from "axios";

const url = "https://thebetter.bsgroup.eu/Authorization/SignIn";

const headers = {
  "Content-Type": "application/json",
};

const getData = (username: string, password: string) => ({
  Username: username,
  Password: password,
});

export const fetchSignIn = (username: string, password: string) =>
  axios.post(url, { ...getData(username, password) }, { headers });
