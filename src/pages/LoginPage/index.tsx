import Login from "../../component/Login";
import styled from "styled-components";
import Container from "../../component/Container";

interface ILoginPageProps {
  className?: string;
}

const LoginPage = ({ className }: ILoginPageProps) => (
  <Container className={className}>
    <Login />
  </Container>
);

const StyledLoginPage = styled(LoginPage)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledLoginPage;
