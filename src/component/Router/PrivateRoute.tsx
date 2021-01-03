import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import React from "react";

interface IPrivateRouteProps {
  children: JSX.Element;
  redirect: string;
  path: string;
}

const PrivateRoute = ({ children, redirect, ...rest }: IPrivateRouteProps) => {
  const { token } = useSelector((state: IState) => state);
  console.log(token);
  return (
    <Route
      {...rest}
      render={() =>
        !!token ? (
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
