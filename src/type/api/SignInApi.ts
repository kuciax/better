interface IAuthorizationToken {
  Token: string;
  TokenExpires: string;
}

export interface ISignIn {
  AuthorizationToken: IAuthorizationToken;
}
