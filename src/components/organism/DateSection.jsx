import FormGroup2 from "../molecules/FormGroup2";
import FormRow2 from "../molecules/FormRow2";
import SectionTitle from "../molecules/SectionTittle";
import Input3 from "../atoms/Input3";
import Label2 from "../atoms/Label2";
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

const DateSection = () => (
  <Section>
    <SectionTitle>FECHA DE EXPEDICIÓN</SectionTitle>
    <FormRow2 className="two-columns">
      <FormGroup2>
        <Label2 htmlFor="fecha_expedicion">
          Fecha <span className="required">*</span>
        </Label2>
        <Input3 type="date" id="fecha_expedicion" name="fecha_expedicion" required />
      </FormGroup2>
      <FormGroup2>
        <Label2 htmlFor="lugar_expedicion">Lugar</Label2>
        <Input3 type="text" id="lugar_expedicion" name="lugar_expedicion" />
      </FormGroup2>
    </FormRow2>
  </Section>
);

export default DateSection;
