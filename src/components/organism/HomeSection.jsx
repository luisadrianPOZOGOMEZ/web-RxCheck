import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";
import StatCard from "../molecules/StatCard";
import ActionCard from "../molecules/ActionCard";

const Wrapper = styled.section`
  font-family: 'Poppins', sans-serif;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 2rem auto;
  max-width: 1200px; 
  width: 90%;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const HomeSection = ({ onShowPatients, onCreateRecipe, onRegisterPatient }) => {
  const [doctorName, setDoctorName] = useState("");
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.nombre) {
      setDoctorName(user.nombre);
    }
  }, []);

  return (
    <Wrapper>
      <div>
        <Title>Bienvenido Dr. {doctorName}</Title>
        <SubTitle>Sistema integral de gestión médica y recetas</SubTitle>
      </div>
      <StatsGrid>
        {/* <StatCard number="127" label="Pacientes Registrados" /> */}
      {/*   <StatCard number="45" label="Recetas Este Mes" />
        <StatCard number="12" label="Citas Hoy" /> */}
      </StatsGrid>
      <ActionsGrid>
  {/*       <ActionCard
          icon="👥"
          title="Ver Pacientes"
          description="Consulta la lista completa de pacientes y sus historiales médicos"
          onClick={onShowPatients}
        /> */}
        <ActionCard
          icon="📝"
          title="Nueva Receta"
          description="Crear una nueva receta médica para un paciente"
          onClick={onCreateRecipe}
        />
  {/*       <ActionCard
          icon="➕"
          title="Registrar Paciente"
          description="Agregar un nuevo paciente al sistema"
          onClick={onRegisterPatient}
        /> */}
      </ActionsGrid>
    </Wrapper>
  );
};

export default HomeSection;