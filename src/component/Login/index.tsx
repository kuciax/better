import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { signIn } from "../../service/user";
import { useHistory } from "react-router";
import route from "../../shared/routes";
import { ChangeEvent, useState } from "react";

interface ILoginProps {
  className?: string;
}

const Login = ({ className }: ILoginProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUsername = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setUsername(e.target.value);
  const handlePassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setPassword(e.target.value);

  const history = useHistory();
  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signIn(username, password);
    history.push(route.home);
  };

  return (
    <div className={className}>
      <Typography variant="h4">Sign in</Typography>
      <div className="form">
        <TextField
          onChange={handleUsername}
          className="username"
          id="standard-basic-input"
          label="Username"
          value={username}
        />
        <TextField
          onChange={handlePassword}
          id="standard-basic-password"
          type="password"
          label="Password"
          value={password}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

const StyledLogin = styled(Login)`
  width: 350px;
  height: 400px;
  padding: 60px;
  .form {
    display: flex;
    flex-direction: column;
    button {
      margin-top: 56px;
    }
  }
  p {
    margin-bottom: 48px;
  }
  .username {
    margin-bottom: 16px;
  }
`;

export default StyledLogin;
