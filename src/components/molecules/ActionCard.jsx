import styled from "styled-components";
import Icon from "../atoms/Icon";

const Card = styled.div`
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #647be1;
    box-shadow: 0 10px 30px rgba(100, 123, 225, 0.2);
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const ActionCard = ({ icon, title, description, onClick }) => (
  <Card onClick={onClick}>
    <Icon>{icon}</Icon>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default ActionCard;