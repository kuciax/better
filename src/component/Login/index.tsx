import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { signIn } from "../../service/userApi"

interface ILoginProps {
  className?: string;
}

const Login = ({ className }: ILoginProps) => {

  return (
    <div className={className}>
      <Typography variant="h4">Sign in</Typography>
      <form noValidate autoComplete="off" onSubmit={(e)=> { e.preventDefault(); 
      
      
   signIn();   }} >
        <div className="form">
          <TextField className="username" id="standard-basic" label="Username" />
          <TextField id="standard-basic" type="password" label="Password" />
          <Button variant="contained" color="primary" type="submit">
            Login
        </Button>
        </div>
      </form>
    </div>
  )
}

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

  .username{
    margin-bottom : 16px;
  }
`;

export default StyledLogin;
