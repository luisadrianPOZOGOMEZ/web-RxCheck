import FormGroup2 from "../molecules/FormGroup2";
import FormRow2 from "../molecules/FormRow2";
import SectionTitle from "../molecules/SectionTittle";
import Input3 from "../atoms/Input3";
import Label2 from "../atoms/Label2";
import Select2 from "../atoms/Select2";
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


const DoctorSection = () => (
  <Section>
    <SectionTitle>DATOS DEL MÉDICO PRESCRIPTOR</SectionTitle>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="medico_nombre">Nombre Completo <span className="required">*</span></Label2>
        <Input3 type="text" id="medico_nombre" name="medico_nombre" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="cedula_profesional">Cédula Profesional <span className="required">*</span></Label2>
        <Input3 type="text" id="cedula_profesional" name="cedula_profesional" required />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="profesion">Profesión <span className="required">*</span></Label2>
        <Select2 id="profesion" name="profesion" required>
          <option value="">Seleccione...</option>
          <option value="medico">Médico</option>
          <option value="medico_homeopata">Médico Homeópata</option>
          <option value="cirujano_dentista">Cirujano Dentista</option>
          <option value="medico_veterinario">Médico Veterinario</option>
          <option value="licenciado_enfermeria">Licenciado en Enfermería</option>
          <option value="pasante">Pasante en Servicio Social</option>
        </Select2>
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="especialidad">Especialidad y Cédula de Especialidad</Label2>
        <Input3 type="text" id="especialidad" name="especialidad" />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="institucion_titulo">Institución que Expidió el Título <span className="required">*</span></Label2>
        <Input3 type="text" id="institucion_titulo" name="institucion_titulo" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="telefono">Teléfono</Label2>
        <Input3 type="tel" id="telefono" name="telefono" />
      </FormGroup2>
    </FormRow2>

    <FormRow2 className="single-column">
      <FormGroup2>
        <Label2 htmlFor="domicilio_establecimiento">Domicilio del Establecimiento de Atención Médica <span className="required">*</span></Label2>
        <Input3 type="text" id="domicilio_establecimiento" name="domicilio_establecimiento" required />
      </FormGroup2>
    </FormRow2>
  </Section>
);

export default DoctorSection;
