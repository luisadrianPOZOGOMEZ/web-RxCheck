import { useState } from "react";
import HomeSection from "../components/organism/HomeSection";
import PatientSection from "../components/organism/PatientSection";
import Navbar from "../components/organism/NavBar";
import styled from "styled-components";

// Datos de ejemplo para pacientes
const samplePatients = [
  {
    name: "María González López",
    email: "maria.gonzalez@email.com",
    phone: "+52 961 123 4567",
    age: 45,
    gender: "Femenino",
    stats: { recetas: 8, mes: 3, dias: 2 },
  },
  {
    name: "Carlos Ramírez Hernández",
    email: "carlos.ramirez@email.com",
    phone: "+52 961 234 5678",
    age: 62,
    gender: "Masculino",
    stats: { recetas: 12, mes: 5, dias: 1 },
  },
  // Agrega más si necesitas...
];

const Wrapper = styled.div`
  background-color: #647be1;
  min-height: 100vh;
  padding-top: 100px;
`;

const Home = () => {
  const [showPatients, setShowPatients] = useState(false);
  const [patients] = useState(samplePatients);
  const [filteredPatients, setFilteredPatients] = useState(samplePatients);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setFilteredPatients(
      patients.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.email.toLowerCase().includes(q) ||
          p.phone.toLowerCase().includes(q)
      )
    );
  };

  const handleViewRecipes = (name) => {
    alert(`Mostrando recetas de: ${name}`);
  };

  const handleRegisterPatient = () => {
    alert("Redirigiendo al formulario de registro de paciente...");
  };

  const handleCreateRecipe = () => {
    alert("Redirigiendo al formulario de crear receta...");
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        {!showPatients ? (
          <HomeSection
            onShowPatients={() => setShowPatients(true)}
            onCreateRecipe={handleCreateRecipe}
            onRegisterPatient={handleRegisterPatient}
          />
        ) : (
          <PatientSection
            patients={filteredPatients}
            onRegisterPatient={handleRegisterPatient}
            onSearch={handleSearch}
            onViewRecipes={handleViewRecipes}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Home;
