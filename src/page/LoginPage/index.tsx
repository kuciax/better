import Login from "../../component/Login";
import styled from "styled-components";

interface ILoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: ILoginPageProps) => (
  <div className={className}>
    <Login />
  </div>
);

const StyledLoginPage = styled(LoginPage)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledLoginPage;
