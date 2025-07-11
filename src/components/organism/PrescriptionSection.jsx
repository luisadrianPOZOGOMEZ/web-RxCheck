import FormGroup2 from "../molecules/FormGroup2";
import FormRow2 from "../molecules/FormRow2";
import Input3 from "../atoms/Input3";
import Label2 from "../atoms/Label2";
import TextArea2 from "../atoms/TextArea2";
import SectionTitle from "../molecules/SectionTittle";
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


const PrescriptionSection = () => (
  <Section>
    <SectionTitle>PRESCRIPCIÓN MÉDICA</SectionTitle>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="denominacion_generica">Denominación Genérica <span className="required">*</span></Label2>
        <Input3 type="text" id="denominacion_generica" name="denominacion_generica" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="denominacion_distintiva">Denominación Distintiva (Opcional)</Label2>
        <Input3 type="text" id="denominacion_distintiva" name="denominacion_distintiva" />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="concentracion">Concentración <span className="required">*</span></Label2>
        <Input3 type="text" id="concentracion" name="concentracion" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="forma_farmaceutica">Forma Farmacéutica <span className="required">*</span></Label2>
        <Input3 type="text" id="forma_farmaceutica" name="forma_farmaceutica" placeholder="Ej: tabletas, cápsulas, jarabe" required />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="dosis">Dosis <span className="required">*</span></Label2>
        <Input3 type="text" id="dosis" name="dosis" placeholder="No usar abreviaturas" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="via_administracion">Vía de Administración <span className="required">*</span></Label2>
        <Input3 type="text" id="via_administracion" name="via_administracion" placeholder="Ej: Oral, Intravenosa, Tópica" required />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="frecuencia">Frecuencia <span className="required">*</span></Label2>
        <Input3 type="text" id="frecuencia" name="frecuencia" placeholder="Evitar abreviaturas" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="duracion_tratamiento">Duración del Tratamiento <span className="required">*</span></Label2>
        <Input3 type="text" id="duracion_tratamiento" name="duracion_tratamiento" required />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="single-column">
      <FormGroup2>
        <Label2 htmlFor="indicaciones">Indicaciones Completas y Claras <span className="required">*</span></Label2>
        <TextArea2 id="indicaciones" name="indicaciones" placeholder="Instrucciones detalladas para la administración del medicamento. No usar abreviaturas." required />
      </FormGroup2>
    </FormRow2>
  </Section>
);

export default PrescriptionSection;