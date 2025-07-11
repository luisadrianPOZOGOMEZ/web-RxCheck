import styled from "styled-components";
import StatNumber from "../atoms/StatNumber";
import StatLabel from "../atoms/StatLabel";

const Card = styled.div`
  background: linear-gradient(135deg, #647be1, #5a6fd8);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(100, 123, 225, 0.3);
`;

const StatCard = ({ number, label }) => (
  <Card>
    <StatNumber>{number}</StatNumber>
    <StatLabel>{label}</StatLabel>
  </Card>
);

export default StatCard;
