import styled from "styled-components";
import Button2 from "../atoms/Button2";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
  border-radius: 15px;
`;

const ResetButton = styled(Button2)`
  background: transparent;
  color: #647be1;
  border: 2px solid #647be1;
  margin-left: 15px;

  &:hover {
    background: #647be1;
    color: white;
    transform: translateY(-2px);
  }
`;

const SubmitSection = ({ isReceived, pdf_url }) => (
  <Wrapper>
    {isReceived ? (
      <>
      <Button2>
        <a href={pdf_url} style={{color: 'white', textDecoration: 'none'}}>Descargar PDF</a>
      </Button2>
      </>
    ) : (
      <>
        <Button2 type="submit">Generar Receta Médica</Button2>
        <ResetButton type="reset">Limpiar Formulario</ResetButton>
      </>
    )}
  </Wrapper>
);

export default SubmitSection;
