import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/organism/Navbar";
import Title from "../components/atoms/Title";
import SubTitle from "../components/atoms/SubTitle";
import Button from "../components/atoms/Button";

const Wrapper = styled.div`
  padding-top: 100px;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const InfoBox = styled.div`
  background: #f8f9ff;
  border: 2px solid #e8ecff;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Label = styled.div`
  font-weight: 600;
  color: #647be1;
  margin-bottom: 0.5rem;
`;

const Value = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

const RecipeList = styled.div`
  margin-top: 2rem;
`;

const RecipeItem = styled.div`
  background: white;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(100, 123, 225, 0.05);
`;

const VerPaciente = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Si luego manejas ID por ruta

  // Simulamos un paciente
  const patient = {
    name: "María González López",
    email: "maria.gonzalez@email.com",
    phone: "+52 961 123 4567",
    age: 45,
    gender: "Femenino",
    recipes: [
      { date: "2024-05-01", description: "Paracetamol 500mg, 2 veces al día" },
      { date: "2024-04-10", description: "Ibuprofeno 400mg, cada 8 horas" },
    ],
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>Ficha del Paciente</Title>
        <SubTitle>Historial y datos personales</SubTitle>

        <InfoBox>
          <Label>Nombre:</Label>
          <Value>{patient.name}</Value>

          <Label>Correo:</Label>
          <Value>{patient.email}</Value>

          <Label>Teléfono:</Label>
          <Value>{patient.phone}</Value>

          <Label>Edad:</Label>
          <Value>{patient.age} años</Value>

          <Label>Género:</Label>
          <Value>{patient.gender}</Value>
        </InfoBox>

        <Title>Recetas Médicas</Title>
        <RecipeList>
          {patient.recipes.map((receta, index) => (
            <RecipeItem key={index}>
              <strong>Fecha:</strong> {receta.date} <br />
              <strong>Descripción:</strong> {receta.description}
            </RecipeItem>
          ))}
        </RecipeList>

        <Button onClick={() => navigate(-1)} style={{ marginTop: "2rem" }}>
          ← Volver
        </Button>
      </Wrapper>
    </>
  );
};

export default VerPaciente;
