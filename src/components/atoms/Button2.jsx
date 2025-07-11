import styled from "styled-components";

const Button2 = styled.button`
  background: linear-gradient(135deg, #647be1 0%, #5a6bcc 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 5px 15px rgba(100, 123, 225, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(100, 123, 225, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default Button2;