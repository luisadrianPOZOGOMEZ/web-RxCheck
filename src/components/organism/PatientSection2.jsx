import FormGroup2 from "../molecules/FormGroup2";
import FormRow2 from "../molecules/FormRow2";
import SectionTitle from "../molecules/SectionTittle";
import Input3 from "../atoms/Input3";
import Label2 from "../atoms/Label2";
import TextArea2 from "../atoms/TextArea2";
import styled from "styled-components";
import { useState, useEffect } from "react";

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

const HintText = styled.p`
  font-size: 12px;
  color: #718096;
  margin-top: 5px;
  font-style: italic;
`;

const PatientSection2 = ({ onPatientData }) => {
  const [formData, setFormData] = useState({
    curp: "",
    peso: "",
    talla: "",
    diagnostico: ""
  });
  const [patientId, setPatientId] = useState(null);
  const [curpError, setCurpError] = useState("");

  useEffect(() => {
    const fetchPaciente = async () => {
      if (formData.curp.length === 18) {
        try {
          const res = await fetch(`https://api.rxcheck.icu/user/users/${formData.curp}`);
          if (!res.ok) throw new Error("Paciente no encontrado");
          const data = await res.json();

          if (data.role !== "paciente") {
            throw new Error("El usuario no es un paciente");
          }

          setPatientId(data.id);
          setCurpError("");

          // Envía la data hacia Recetas.jsx si está el callback
          if (onPatientData) {
            onPatientData({
              id: data.id,
              weight: formData.peso,
              height: formData.talla,
              diagnostic: formData.diagnostico,
            });
          }
        } catch (err) {
          setPatientId(null);
          setCurpError("⚠️ CURP no válida o el usuario no es un paciente");
        }
      }
    };

    fetchPaciente();
  }, [formData.curp]);

  useEffect(() => {
    if (patientId && onPatientData) {
      onPatientData({
        id: patientId,
        weight: formData.peso,
        height: formData.talla,
        diagnostic: formData.diagnostico
      });
    }
  }, [formData.peso, formData.talla, formData.diagnostico, patientId]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "curp" ? value.toUpperCase() : value
    }));
  };

  const allowedKeys = [
    "Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp",
    "ArrowDown", "Tab", "Enter", "Escape", "Home", "End", "CapsLock",
    "Shift", "Control", "Alt", "Meta"
  ];

  const isValidKey = (key, type) => {
    const regexes = {
      textOnly: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/,
      numbersOnly: /^[0-9]$/,
      curp: /^[A-Z0-9]$/
    };
    return regexes[type]?.test(key);
  };

  const isValidText = (text, type) => {
    const regexes = {
      textOnly: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/,
      numbersOnly: /^[0-9]+$/,
      curp: /^[A-Z0-9]+$/
    };
    return regexes[type]?.test(text);
  };

  const handleInputTypeValidation = (e, type) => {
    const key = e.key;
    if (e.ctrlKey || e.metaKey || allowedKeys.includes(key)) return;
    if (!isValidKey(key, type)) e.preventDefault();
  };

  const handlePasteValidation = (e, type) => {
    const pastedText = e.clipboardData.getData("text");
    if (!isValidText(pastedText, type)) e.preventDefault();
  };

  const renderHint = (text) => <HintText>{text}</HintText>;

  return (
    <Section>
      <SectionTitle>DATOS DEL PACIENTE</SectionTitle>

      <FormRow2 className="two-columns">
        <FormGroup2>
          <Label2 htmlFor="curp">CURP del paciente <span className="required">*</span></Label2>
          <Input3
            id="curp"
            name="curp"
            type="text"
            maxLength={18}
            pattern="[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z]{2}"
            value={formData.curp}
            onChange={handleChange}
            onKeyDown={(e) => handleInputTypeValidation(e, "curp")}
            onPaste={(e) => handlePasteValidation(e, "curp")}
            required
            style={{ textTransform: "uppercase" }}
          />
          {renderHint("18 caracteres en mayúsculas, formato: AAAA######HAAAAA##")}
          {curpError && <HintText style={{ color: "red" }}>{curpError}</HintText>}
        </FormGroup2>
        <FormGroup2>
          <Label2 htmlFor="peso">Peso (kg)</Label2>
          <Input3
            id="peso"
            name="peso"
            type="text"
            placeholder="Ej: 070.300"
            value={formData.peso}
            onChange={(e) => {
              const value = e.target.value;
              const regex = /^\d{0,3}(\.\d{0,3})?$/;
              if (regex.test(value)) {
                setFormData((prev) => ({ ...prev, peso: value }));
              }
            }}
            maxLength={7}
          />
        </FormGroup2>
      </FormRow2>

      <FormRow2 className="two-columns">
        <FormGroup2>
          <Label2 htmlFor="talla">Talla (m)</Label2>
          <Input3
            id="talla"
            name="talla"
            type="text"
            placeholder="Ej: 1.65"
            value={formData.talla}
            onChange={(e) => {
              const value = e.target.value;
              const regex = /^\d{0,1}(\.\d{0,2})?$/;
              if (regex.test(value)) {
                setFormData((prev) => ({ ...prev, talla: value }));
              }
            }}
            maxLength={4}
          />
        </FormGroup2>

        <FormGroup2>
          <Label2 htmlFor="diagnostico">Diagnóstico</Label2>
          <TextArea2
            id="diagnostico"
            name="diagnostico"
            placeholder="Escriba el diagnóstico"
            onKeyDown={(e) => handleInputTypeValidation(e, "textOnly")}
            onPaste={(e) => handlePasteValidation(e, "textOnly")}
            value={formData.diagnostico}
            onChange={handleChange}
          />
        </FormGroup2>
      </FormRow2>
    </Section>
  );
};

export default PatientSection2;
