import axios from "axios";
import { AnyAaaaRecord, AnyNsRecord } from "dns";
import { signInSucess } from "../store/actionCreators";
import { SIGN_IN } from "../store/actions";

const url = "https://thebetter.bsgroup.eu/Authorization/SignIn";

const headers = {
  "Content-Type": "application/json",
};

export const signIn = () => async (dispatch: any) => {
  const request = await axios.post(url, { headers });
  return dispatch(signInSucess(request.data.AuthorizationToken.Token));
};
