import DoctorSection from "../components/organism/DoctorSection";
import PatientSection2 from "../components/organism/PatientSection2";
import PrescriptionSection from "../components/organism/PrescriptionSection";
import DateSection from "../components/organism/DateSection";
import SubmitSection from "../components/organism/SubmitSections";
import ValidityInfo from "../components/organism/ValidityInfo";
import styled, { createGlobalStyle } from "styled-components";
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

  return (
    <>
      <GlobalStyle />
      <FormContainer>
        <FormHeader>
          <HeaderTitle>Receta Médica Digital</HeaderTitle>
          <HeaderSubtitle>Conforme a la NOM-001-SSA1-2020</HeaderSubtitle>
        </FormHeader>

        <FormContent>
          <form id="prescriptionForm" method="POST">
            <DoctorSection />
            <DateSection />
            <PatientSection2 />
            <PrescriptionSection />
            <ValidityInfo />
            <SubmitSection />
          </form>
        </FormContent>
      </FormContainer>
    </>
  );
};

export default Recetas;
