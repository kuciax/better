import axios from "axios";

const url = "https://thebetter.bsgroup.eu/Authorization/SignIn";

const headers = {
  "Content-Type": "application/json",
};

export const fetchSignIn = () => axios.post(url, { headers });
