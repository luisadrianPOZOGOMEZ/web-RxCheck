// src/components/organisms/FormRegister.jsx
import styled from "styled-components";
import { useState } from "react";
import { FormGroup } from "../molecules/FormGroup";
import { FormRow } from "../molecules/FormRow";
import { WarningBox } from "../molecules/WarningBox";
import { InfoBox } from "../molecules/InfoBox";
import { Checkbox } from "../atoms/CheckBox";
import { Input } from "../atoms/Input";

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #2c5aa0 0%, #1a365d 100%);
  color: white;
  padding: 30px;
  text-align: center;
  border-radius: 15px 15px 0 0;
  margin-bottom: 24px;
`;

const HeaderTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 35px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: white;
  padding: 15px 20px;
  font-weight: 600;
  font-size: 16px;
`;

const SectionContent = styled.div`
  padding: 25px;
`;

const HintText = styled.p`
  font-size: 12px;
  color: #718096;
  margin-top: 5px;
  font-style: italic;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #e2e8f0;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(72, 187, 120, 0.3);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(72, 187, 120, 0.4);
  }
`;

function FormRegister() {
  
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      alert("⚠️ La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo especial.");
      return;
    }

    if (formData.password !== formData.password_confirm) {
      alert("⚠️ Las contraseñas no coinciden");
      return;
    }
    
    const curp = formData.curp || "";
    const fecha = formData.fecha_nacimiento || "";
    if (curp.length === 18 && fecha) {
      const anioCurp = (curp[4] === '0' ? '20' : '19') + curp.slice(4, 6);
      const mesCurp = curp.slice(6, 8);
      const diaCurp = curp.slice(8, 10);
      const [anio, mes, dia] = fecha.split("-");
      if (anio !== anioCurp || mes !== mesCurp || dia !== diaCurp) {
        alert("⚠️ La fecha de nacimiento no coincide con la CURP");
        return;
      }
    }
    console.log("Formulario válido y listo para enviar", formData);
  };

  const renderHint = (text) => <HintText>{text}</HintText>;

  return (
    <Form onSubmit={handleSubmit}>
      <Header>
        <HeaderTitle>Registro de Médicos</HeaderTitle>
        <p>Sistema de Recetas Médicas Electrónicas - México</p>
      </Header>

      <Section>
        <SectionHeader>👨‍⚕️ Información Personal</SectionHeader>
        <SectionContent>
          <FormRow>
            <FormGroup label="CURP" name="curp" required>
              <Input
                name="curp"
                onChange={handleChange}
                pattern="[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z]{2}"
                maxLength={18}
                required
              />
              {renderHint("18 caracteres en mayúsculas, formato: AAAA######HAAAAA##")}
            </FormGroup>
            <FormGroup label="Nombre(s)" name="nombres" required>
              <Input name="nombres" pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$" onChange={handleChange} required />
              {renderHint("Solo letras y espacios. No se permiten números ni símbolos.")}
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup label="Apellido Paterno" name="apellido_paterno" required>
              <Input name="apellido_paterno" pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$" onChange={handleChange} required />
              {renderHint("Solo letras y espacios.")}
            </FormGroup>
            <FormGroup label="Apellido Materno" name="apellido_materno" required>
              <Input name="apellido_materno" pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$" onChange={handleChange} required />
              {renderHint("Solo letras y espacios (puede quedar en blanco si aplica).")}
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup label="RFC" name="rfc" required>
              <Input name="rfc" pattern="^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$" maxLength={13} onChange={handleChange} required />
              {renderHint("Debe contener letras mayúsculas y números, máximo 13 caracteres.")}
            </FormGroup>
            <FormGroup label="Fecha de Nacimiento" name="fecha_nacimiento" type="date" required>
              <Input name="fecha_nacimiento" type="date" onChange={handleChange} required />
              {renderHint("Debe coincidir con la fecha en la CURP.")}
            </FormGroup>
          </FormRow>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>🎓 Información Profesional</SectionHeader>
        <SectionContent>
          <FormRow>
            <FormGroup label="Número de Cédula Profesional" name="cedula_profesional" required>
              <Input name="cedula_profesional" pattern="^\d{7,8}$" onChange={handleChange} required />
              {renderHint("Debe contener solo números (7 u 8 dígitos).")}
            </FormGroup>
          </FormRow>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>📞 Datos de Contacto</SectionHeader>
        <SectionContent>
          <FormRow>
            <FormGroup label="Teléfono Principal" name="telefono_principal" required>
              <Input name="telefono_principal" pattern="^\+52\d{10}$" onChange={handleChange} required />
              {renderHint("Formato: +521234567890 (código de país + 10 dígitos).")}
            </FormGroup>
            <FormGroup label="Correo Electrónico" name="email" type="email" required>
              <Input name="email" type="email" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" onChange={handleChange} required />
              {renderHint("Debe ser una dirección válida. Ej: usuario@dominio.com")}
            </FormGroup>
          </FormRow>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeader>🔐 Configuración de Cuenta</SectionHeader>
        <SectionContent>
          <FormRow>
            <FormGroup label="Correo Electrónico" name="email_cuenta" type="email" required>
              <Input name="email_cuenta" type="email" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" onChange={handleChange} required />
              {renderHint("Correo que usarás para iniciar sesión.")}
            </FormGroup>
            <FormGroup label="Contraseña" name="password" type="password" required>
              <Input name="password" type="password"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-]).{8,}$" onChange={handleChange} required />
                {renderHint("Mínimo 8 caracteres. Debe contener al menos una mayúscula, una minúscula, un número y un símbolo especial.")}  
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup label="Confirmar Contraseña" name="password_confirm" type="password" required>
              <Input name="password_confirm" type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-]).{8,}$" onChange={handleChange} required />
              {renderHint("Debe coincidir exactamente con la contraseña ingresada.")}
            </FormGroup>
          </FormRow>

          <InfoBox title="📝 Permisos de Prescripción">
            Seleccione los tipos de medicamentos que está autorizado a prescribir según su perfil profesional:
          </InfoBox>
          <Checkbox label="Fracción I - Estupefacientes (Requiere permiso especial de COFEPRIS)" name="puede_prescribir_fraccion_i" />
          <Checkbox label="Fracción II - Psicotrópicos" name="puede_prescribir_fraccion_ii" />
          <Checkbox label="Fracción III - Medicamentos que requieren receta médica" name="puede_prescribir_fraccion_iii" />
          <Checkbox label="Fracción IV - Medicamentos que requieren receta médica para su venta" name="puede_prescribir_fraccion_iv" defaultChecked />
          <Checkbox label="Fracción V - Medicamentos sin receta (venta libre)" name="puede_prescribir_fraccion_v" defaultChecked />
          <Checkbox label="Fracción VI - Medicamentos herbolarios" name="puede_prescribir_fraccion_vi" defaultChecked />
        </SectionContent>
      </Section>

      <WarningBox title="📋 Declaración y Términos">
        <Checkbox
          label="Declaro bajo protesta de decir verdad que todos los datos proporcionados son correctos y me comprometo a mantenerlos actualizados. Acepto los términos y condiciones del servicio."
          name="acepta_terminos"
          required
        />
        <Checkbox
          label="Autorizo la verificación de mis datos profesionales con las autoridades competentes (Registro Nacional de Profesionistas, COFEPRIS, etc.)."
          name="acepta_verificacion"
          required
        />
        <Checkbox
          label="Acepto recibir notificaciones por correo electrónico sobre actualizaciones del sistema y cambios normativos."
          name="acepta_notificaciones"
        />
      </WarningBox>

      <ButtonContainer>
        <SubmitButton type="submit">Registrar Médico</SubmitButton>
      </ButtonContainer>
    </Form>
  );
}

export default FormRegister;