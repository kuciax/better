import Home from "../../component/Home";
import styled from "styled-components";
import Container from "../../component/Container";

interface IHomePageProps {
  className?: string;
}

const HomePage = ({ className }: IHomePageProps) => (
  <Container className={className}>
    <Home />
  </Container>
);

const StyledHomePage = styled(HomePage)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHomePage;
