import styled from "styled-components"

interface ILoginProps {
  className?: string
}

const Login = ({ className }: ILoginProps) =>
  <div className={className}></div>


const StyledLogin = styled(Login)`
width: 480px;
height:500px;
background-color: red;
`

export default StyledLogin



