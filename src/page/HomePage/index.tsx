import Home from "../../component/Home";
import styled from "styled-components";

interface IHomePageProps {
  className?: string;
}

const HomePage = ({ className }: IHomePageProps) => (
  <div className={className}>
    <Home />
  </div>
);

const StyledHomePage = styled(HomePage)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHomePage;
