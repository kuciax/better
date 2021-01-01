import styled from "styled-components";

interface IContainerProps {
    className?: string;
    children: JSX.Element;
}

const Container = ({ className, children }: IContainerProps) => (
    <div className={className}>
        {children}
    </div>
);

const StyledContainer = styled(Container)`
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #73AD21;`

export default StyledContainer;
