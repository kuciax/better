import { Route, Redirect } from "react-router-dom";
import { isTokenValid } from "../../service/localStorage";

interface IPrivateRouteProps {
  children: JSX.Element;
  redirect: string;
  path: string;
}

const PrivateRoute = ({ children, redirect, ...rest }: IPrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={() =>
        isTokenValid() ? (
          <div>{children}</div>
        ) : (
          <Redirect
            to={{
              pathname: redirect,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
