import styled from "styled-components";
import PatientDetail from "../atoms/PatientDetail";
import StatNumber from "../atoms/StatNumber";
import StatLabel from "../atoms/StatLabel";

const Card = styled.div`
  background: #f8f9ff;
  border: 2px solid #e8ecff;
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #647be1;
    background: #f0f4ff;
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(100, 123, 225, 0.2);
  }
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`;

const Stat = styled.div`
  text-align: center;
`;

const PatientCard = ({ name, email, phone, ageGender, stats, onClick }) => (
  <Card onClick={onClick}>
    <Info>
      <Name>{name}</Name>
      <PatientDetail>{email}</PatientDetail>
      <PatientDetail>{phone}</PatientDetail>
      <PatientDetail>{ageGender}</PatientDetail>
    </Info>
    <Stats>
      {stats.map((s, i) => (
        <Stat key={i}>
          <StatNumber>{s.number}</StatNumber>
          <StatLabel>{s.label}</StatLabel>
        </Stat>
      ))}
    </Stats>
  </Card>
);

export default PatientCard;
