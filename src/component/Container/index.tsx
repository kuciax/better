import { Container as MaterialContainer } from "@material-ui/core";
import styled from "styled-components";

interface IContainerProps {
  className?: string;
  children: JSX.Element;
}

const Container = ({ className, children }: IContainerProps) => (
  <MaterialContainer maxWidth="xl">
    <div className={className}>{children}</div>
  </MaterialContainer>
);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export default StyledContainer;
