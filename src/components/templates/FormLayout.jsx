import styled from "styled-components";
import FormHeader from "../organisms/FormHeader";
import DoctorSection from "../organisms/DoctorSection";
import DateSection from "../organisms/DateSection";
import PatientSection from "../organisms/PatientSection";
import PrescriptionSection from "../organisms/PrescriptionSection";
import ValidityInfo from "../molecules/ValidityInfo";
import SubmitSection from "../organisms/SubmitSection";

const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
`;

const FormWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormLayout = () => {
  return (
    <Container>
      <FormWrapper>
        <FormHeader />
        <Content>
          <form id="prescriptionForm">
            <DoctorSection />
            <DateSection />
            <PatientSection />
            <PrescriptionSection />
            <ValidityInfo />
            <SubmitSection />
          </form>
        </Content>
      </FormWrapper>
    </Container>
  );
};

export default FormLayout;
