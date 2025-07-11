import styled from "styled-components";

const Input2 = styled.input`
  width: 95%;
  padding: 0.8rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #647be1;
  }
`;

export default Input2;