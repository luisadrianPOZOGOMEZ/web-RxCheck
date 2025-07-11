import styled from "styled-components";

const Input3 = styled.input`
  width: 95%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  background: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #647be1;
    box-shadow: 0 0 0 3px rgba(100, 123, 225, 0.1);
    transform: translateY(-1px);
  }
`;

export default Input3;