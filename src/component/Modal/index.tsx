import styled from "styled-components";

interface IModalProps {
  className?: string;
  children: JSX.Element;
  onClick: () => void;
}
const Modal = ({ className, children, onClick }: IModalProps) => (
  <div id="myModal" className={className}>
    <div className="modal-content">
      <span className="close" onClick={onClick}>
        &times;
      </span>
      {children}
    </div>
  </div>
);

/* The Modal (background) */

const StyledModal = styled(Modal)`
  & {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); 
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default StyledModal;
