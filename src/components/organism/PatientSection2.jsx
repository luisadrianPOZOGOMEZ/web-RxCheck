import FormGroup2 from "../molecules/FormGroup2";
import FormRow2 from "../molecules/FormRow2";
import SectionTitle from "../molecules/SectionTittle";
import Input3 from "../atoms/Input3";
import Label2 from "../atoms/Label2";
import TextArea2 from "../atoms/TextArea2";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 40px;
  border-radius: 15px;
  border: 2px solid #f0f0f0;
  padding: 30px;
  background: #fafafa;
  transition: all 0.3s ease;

  &:hover {
    border-color: #647be1;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(100, 123, 225, 0.1);
  }
`;

const PatientSection2 = () => (
  <Section>
    <SectionTitle>DATOS DEL PACIENTE</SectionTitle>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="paciente_nombre">Nombre Completo <span className="required">*</span></Label2>
        <Input3 type="text" id="paciente_nombre" name="paciente_nombre" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="paciente_fecha_nacimiento">Fecha de Nacimiento <span className="required">*</span></Label2>
        <Input3 type="date" id="paciente_fecha_nacimiento" name="paciente_fecha_nacimiento" required />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="paciente_peso">Peso (kg)</Label2>
        <Input3 type="number" id="paciente_peso" name="paciente_peso" step="0.1" min="0" />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="paciente_talla">Talla (cm)</Label2>
        <Input3 type="number" id="paciente_talla" name="paciente_talla" step="0.1" min="0" />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="single-column">
      <FormGroup2>
        <Label2 htmlFor="paciente_domicilio">Domicilio (Obligatorio para medicamentos Fracción I)</Label2>
        <Input3 type="text" id="paciente_domicilio" name="paciente_domicilio" />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="single-column">
      <FormGroup2>
        <Label2 htmlFor="diagnostico">Diagnóstico (Obligatorio para medicamentos Fracción I)</Label2>
        <TextArea2 id="diagnostico" name="diagnostico" placeholder="Indique el diagnóstico del paciente" />
      </FormGroup2>
    </FormRow2>
  </Section>
);

export default PatientSection2;