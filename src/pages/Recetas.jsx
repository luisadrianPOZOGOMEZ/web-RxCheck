import DoctorSection from "../components/organism/DoctorSection";
import PatientSection2 from "../components/organism/PatientSection2";
import PrescriptionSection from "../components/organism/PrescriptionSection";
import DateSection from "../components/organism/DateSection";
import SubmitSection from "../components/organism/SubmitSections";
import ValidityInfo from "../components/organism/ValidityInfo";
import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
  }
`;

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const FormHeader = styled.div`
  background: linear-gradient(135deg, #647be1 0%, #5a6bcc 100%);
  color: white;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const FormContent = styled.div`
  padding: 40px;
`;

const Recetas = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const curp = user?.curp || "";

  const [patientData, setPatientData] = useState(null);
  const [medications, setMedications] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    console.log("patientData:", patientData);
    console.log("medications:", medications);


    if (!patientData || medications.length === 0) {
      alert("⚠️ Faltan datos del paciente o medicamentos.");
      return;
    }

    const token = localStorage.getItem("token"); // Asegúrate que el token esté guardado
    if (!token) {
      alert("⚠️ Token de autenticación no disponible.");
      return;
    }

    const payload = {
      patient: {
        id: patientData.id,
        weight: parseFloat(patientData.weight),
        height: parseFloat(patientData.height),
        diagnostic: patientData.diagnostic
      },
      medications: medications.map((med) => ({
        id: med.id,
        dosis: med.dosis,
        duration: med.duration,
        indication: med.indication
      }))
    };

    try {
      const response = await fetch("https://api.rxcheck.icu/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (response.ok) {
        alert("✅ Receta enviada correctamente");
        console.log("Resultado:", result);
      } else {
        console.error("❌ Error en la respuesta:", result);
        alert("❌ Error al enviar la receta. Verifica los datos.");
      }
    } catch (error) {
      console.error("❌ Error en la petición:", error);
      alert("❌ Error de red al enviar la receta.");
    }
  };


  return (
    <>
      <GlobalStyle />
      <FormContainer>
        <FormHeader>
          <HeaderTitle>Receta Médica Digital</HeaderTitle>
          <HeaderSubtitle>Conforme a la NOM-001-SSA1-2020</HeaderSubtitle>
        </FormHeader>

        <FormContent>
          <form id="prescriptionForm" method="POST" onSubmit={handleSubmit}>
            <DoctorSection curp={curp}/>
{/*             <DateSection /> */}
            <PatientSection2 onPatientData={(data) => setPatientData(data)}/>
            <PrescriptionSection onMedicationsChange={(data) => setMedications(data)} />
            <ValidityInfo />
            <SubmitSection />
          </form>
        </FormContent>
      </FormContainer>
    </>
  );
};

export default Recetas;
