import axios from "axios";
import { signInSucess } from "../store/actionCreators";

const url = "https://thebetter.bsgroup.eu/Authorization/SignIn";

const headers = {
  "Content-Type": "application/json",
};

export const signIn = () => async (dispatch: any) => {
  const request = await axios.post(url, { headers });
  return dispatch(signInSucess(request.data.AuthorizationToken.Token));
};
