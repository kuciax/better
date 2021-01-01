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
padding: 8px;
width:200px;
`;

export default StyledHeader;
