import styled from "styled-components";
import Title from "../atoms/Title";
import PatientCard from "../molecules/PatientCard";
import SearchBar from "../molecules/SearchBar";

const Wrapper = styled.section`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const AddButton = styled.button`
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

const PatientSection = ({ patients, onRegisterPatient, onSearch, onViewRecipes }) => (
  <Wrapper>
    <Header>
      <Title>Lista de Pacientes</Title>
      <SearchBar onSearch={onSearch} />
      <AddButton onClick={onRegisterPatient}>+ Nuevo Paciente</AddButton>
    </Header>
    <Grid>
      {patients.map((patient, idx) => (
        <PatientCard key={idx} patient={patient} onClick={() => onViewRecipes(patient.name)} />
      ))}
    </Grid>
  </Wrapper>
);

export default PatientSection;
