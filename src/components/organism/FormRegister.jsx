// src/components/organisms/FormRegister.jsx
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FormGroup } from "../molecules/FormGroup";
import { FormRow } from "../molecules/FormRow";
import { WarningBox } from "../molecules/WarningBox";
import { InfoBox } from "../molecules/InfoBox";
import { Checkbox } from "../atoms/CheckBox";
import { Input } from "../atoms/Input";
import { useNavigate } from "react-router-dom";

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
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();


  const allowedKeys = [
    "Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp",
    "ArrowDown", "Tab", "Enter", "Escape", "Home", "End", "CapsLock",
    "Shift", "Control", "Alt", "Meta"
  ];

  const handleInputTypeValidation = (e, type) => {
    const key = e.key;
    if (e.ctrlKey || e.metaKey || allowedKeys.includes(key)) return;
    if (!isValidKey(key, type)) e.preventDefault();
  };

  const handlePasteValidation = (e, type) => {
    const pastedText = e.clipboardData.getData("text");
    if (!isValidText(pastedText, type)) e.preventDefault();
  };

  const isValidKey = (key, type) => {
    const regexes = {
      textOnly: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/,
      numbersOnly: /^[0-9]$/,
      curp: /^[A-Z0-9]$/,
      rfc: /^[A-ZÑ&0-9]$/
    };
    return regexes[type]?.test(key);
  };

  const isValidText = (text, type) => {
    const regexes = {
      textOnly: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      numbersOnly: /^[0-9]+$/,
      curp: /^[A-Z0-9]+$/,
      rfc: /^[A-ZÑ&0-9]+$/
    };
    return regexes[type]?.test(text);
  };

/*   const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Validación cruzada CURP - fecha de nacimiento
    if (name === "curp" || name === "fecha_nacimiento") {
      validateCurpAndBirthDate(updatedFormData);
    }
  }; */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    const updated = { ...formData, [name]: fieldValue };
    setFormData(updated);

    if (name === "curp" || name === "fecha_nacimiento") {
      validateCurpAndBirthDate(updated);
    }
  };



    const validateCurpAndBirthDate = (data) => {
    const curp = (data.curp || "").toUpperCase();
    const fecha = data.fecha_nacimiento || "";

    if (curp.length === 18 && fecha) {
      const anioCurp = (curp[4] === '0' ? '20' : '19') + curp.slice(4, 6);
      const mesCurp = curp.slice(6, 8);
      const diaCurp = curp.slice(8, 10);
      const [anio, mes, dia] = fecha.split("-");

      if (anio !== anioCurp || mes !== mesCurp || dia !== diaCurp) {
        setErrors(prev => ({ ...prev, curp_fecha: "⚠️ La fecha no coincide con la CURP" }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.curp_fecha;
          return newErrors;
        });
      }
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.curp_fecha;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
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
      const anioCurp = (curp[4] === "0" ? "20" : "19") + curp.slice(4, 6);
      const mesCurp = curp.slice(6, 8);
      const diaCurp = curp.slice(8, 10);
      const [anio, mes, dia] = fecha.split("-");
      if (anio !== anioCurp || mes !== mesCurp || dia !== diaCurp) {
        alert("⚠️ La fecha de nacimiento no coincide con la CURP");
        return;
      }
    }

    try {
      const permisos = {
        fraccion1: !!formData.puede_prescribir_fraccion_i,
        fraccion2: !!formData.puede_prescribir_fraccion_ii,
        fraccion3: !!formData.puede_prescribir_fraccion_iii,
        fraccion4: !!formData.puede_prescribir_fraccion_iv,
        fraccion5: !!formData.puede_prescribir_fraccion_v,
        fraccion6: !!formData.puede_prescribir_fraccion_vi
      };

      const terminos = {
        datosCorrectos: !!formData.acepta_terminos,
        verificacionDatos: !!formData.acepta_verificacion,
        notificacionesEmail: !!formData.acepta_notificaciones
      };

      const form = new FormData();
      form.append("curp", formData.curp);
      form.append("nombre", formData.nombres);
      form.append("apellidoPaterno", formData.apellido_paterno);
      form.append("apellidoMaterno", formData.apellido_materno);
      form.append("email", formData.email_cuenta);
      form.append("password", formData.password);
      form.append("role", "medico");
      form.append("rfc", formData.rfc);
      form.append("cedulaProfesional", formData.cedula_profesional);
      form.append("telefono", formData.telefono_principal);
      form.append("permisosPrescripcion", JSON.stringify(permisos));
      form.append("declaracionTerminos", JSON.stringify(terminos));
      form.append("fechaNacimiento", formData.fecha_nacimiento);
      form.append("imagen", ""); 

      const res = await fetch("https://api.rxcheck.icu/user/users", {
        method: "POST",
        body: form
      });

      if (res.ok) {
        alert("✅ Médico registrado exitosamente");
        navigate("/Login");
      } else {
        const errorText = await res.text();
        alert("❌ Error al registrar médico: " + errorText);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error de conexión: " + err.message);
    }
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
                maxLength={18}
                pattern="[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z]{2}"
                onKeyDown={(e) => handleInputTypeValidation(e, "curp")}
                onPaste={(e) => handlePasteValidation(e, "curp")}
                onChange={handleChange}
                required
              />
              {renderHint("18 caracteres en mayúsculas, formato: AAAA######HAAAAA##")}
              {errors.curp_fecha && <HintText style={{ color: "red" }}>{errors.curp_fecha}</HintText>}
            </FormGroup>
            <FormGroup label="Nombre(s)" name="nombres" required>
              <Input
                name="nombres"
                onKeyDown={(e) => handleInputTypeValidation(e, "textOnly")}
                onPaste={(e) => handlePasteValidation(e, "textOnly")}
                onChange={handleChange}
                required
              />
              {renderHint("Solo letras y espacios. No se permiten números ni símbolos.")}
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup label="Apellido Paterno" name="apellido_paterno" required>
              <Input
                name="apellido_paterno"
                onKeyDown={(e) => handleInputTypeValidation(e, "textOnly")}
                onPaste={(e) => handlePasteValidation(e, "textOnly")}
                onChange={handleChange}
                required
              />
              {renderHint("Solo letras y espacios.")}
            </FormGroup>
            <FormGroup label="Apellido Materno" name="apellido_materno" required>
              <Input
                name="apellido_materno"
                onKeyDown={(e) => handleInputTypeValidation(e, "textOnly")}
                onPaste={(e) => handlePasteValidation(e, "textOnly")}
                onChange={handleChange}
                required
              />
              {renderHint("Solo letras y espacios (puede quedar en blanco si aplica).")}
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup label="RFC" name="rfc" required>
              <Input
                name="rfc"
                maxLength={13}
                onKeyDown={(e) => handleInputTypeValidation(e, "rfc")}
                onPaste={(e) => handlePasteValidation(e, "rfc")}
                onChange={handleChange}
                required
              />
              {renderHint("Debe contener letras mayúsculas y números, máximo 13 caracteres.")}
            </FormGroup>
            <FormGroup label="Fecha de Nacimiento" name="fecha_nacimiento" type="date" required>
              <Input
                name="fecha_nacimiento"
                type="date"
                onChange={handleChange}
                required
              />
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
              <Input 
              name="cedula_profesional" 
              maxLength={8}
              onKeyDown={(e) => handleInputTypeValidation(e, "numbersOnly")}
              onPaste={(e) => handlePasteValidation(e, "numbersOnly")}
              onChange={handleChange} 
              required 
              />
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
              <Input
                name="telefono_principal"
                maxLength={10}
                onKeyDown={(e) => handleInputTypeValidation(e, "numbersOnly")}
                onPaste={(e) => handlePasteValidation(e, "numbersOnly")}
                onChange={handleChange}
                required
              />
              {renderHint("Solo 10 dígitos, sin espacios ni guiones.")}
            </FormGroup>
            <FormGroup label="Correo Electrónico" name="email" type="email" required>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                required
              />
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
              <Input 
                name="email_cuenta" 
                type="email" 
                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" 
                onChange={handleChange} 
                required />
              {renderHint("Correo que usarás para iniciar sesión.")}
            </FormGroup>
            <FormGroup label="Contraseña" name="password" type="password" required>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                required
              />
              {renderHint("Mínimo 8 caracteres. Debe contener al menos una mayúscula, una minúscula, un número y un símbolo especial.")}
            </FormGroup>
            <FormGroup label="Confirmar Contraseña" name="password_confirm" type="password" required>
              <Input
                name="password_confirm"
                type="password"
                onChange={handleChange}
                required
              />
              {renderHint("Debe coincidir exactamente con la contraseña ingresada.")}
            </FormGroup>
          </FormRow>
        </SectionContent>

          <InfoBox title="📝 Permisos de Prescripción">
            Seleccione los tipos de medicamentos que está autorizado a prescribir según su perfil profesional:
          </InfoBox>
          <Checkbox label="Fracción I - Estupefacientes (Requiere permiso especial de COFEPRIS)" name="puede_prescribir_fraccion_i" />
          <Checkbox label="Fracción II - Psicotrópicos" name="puede_prescribir_fraccion_ii" />
          <Checkbox label="Fracción III - Medicamentos que requieren receta médica" name="puede_prescribir_fraccion_iii" />
          <Checkbox label="Fracción IV - Medicamentos que requieren receta médica para su venta" name="puede_prescribir_fraccion_iv" defaultChecked />
          <Checkbox label="Fracción V - Medicamentos sin receta (venta libre)" name="puede_prescribir_fraccion_v" defaultChecked />
          <Checkbox label="Fracción VI - Medicamentos herbolarios" name="puede_prescribir_fraccion_vi" defaultChecked />


      </Section>

      

      <WarningBox title="📋 Declaración y Términos">
        <Checkbox
          label="Declaro bajo protesta de decir verdad que todos los datos proporcionados son correctos..."
          name="acepta_terminos"
          required
        />
        <Checkbox
          label="Autorizo la verificación de mis datos profesionales..."
          name="acepta_verificacion"
          required
        />
        <Checkbox
          label="Acepto recibir notificaciones por correo electrónico..."
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
