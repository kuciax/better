import styled from "styled-components";
import { Logo } from "../../icon";

interface IHeaderProps {
  className?: string;
}

const Header = ({ className }: IHeaderProps) => (
  <div className={className}>
    <div className="logo-wrapper">
      <Logo width={100} height={35} />
    </div>
  </div>
);

const StyledHeader = styled(Header)`
  display: flex;
  align-items: flex-start;
  padding: 8px;
`;

export default StyledHeader;
