import styled from "styled-components";

const Info = styled.div`
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 2px solid #ffdb4d;
  border-radius: 15px;
  padding: 20px;
  margin: 25px 0;
  font-size: 0.9rem;

  strong {
    color: #856404;
    font-weight: 600;
  }
`;

const ValidityInfo = () => (
  <Info>
    <strong>Vigencia de la receta:</strong><br />
    • Fracción I (Estupefacientes): Requiere receta especial, máximo 30 días<br />
    • Fracción II (Psicotrópicos): 30 días naturales<br />
    • Fracción III: 6 meses<br />
    • Fracciones IV, V, VI: Según indicación médica
  </Info>
);

export default ValidityInfo;
