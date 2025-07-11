import styled from "styled-components";

const Button = styled.button`
  background: #647be1;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #5a6fd8;
  }
`;

export default Button;