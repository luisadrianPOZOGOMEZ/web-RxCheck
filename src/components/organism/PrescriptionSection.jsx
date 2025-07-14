import { useState, useEffect } from "react";
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

const SuggestionBox = styled.ul`
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  position: absolute;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 150px;
  overflow-y: auto;
`;

const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const PrescriptionSection = ({ onMedicationsChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMedications, setSelectedMedications] = useState([]);



useEffect(() => {
  const delay = setTimeout(() => {
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }
    const token = localStorage.getItem("token");
    console.log("🔍 Buscando medicinas:", searchTerm);
    fetch(`http://api.rxcheck.icu/medication/search?q=${encodeURIComponent(searchTerm)}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        console.log("Status fetch:", res.status);
        return res.json();
      })
      .then(data => {
        console.log("Data recibida:", data);
        if (data.success && Array.isArray(data.data)) {
          setSuggestions(data.data);
        } else {
          setSuggestions([]);
        }
      })
      .catch(err => {
        console.error("Error en fetch de medicamento:", err);
        setSuggestions([]);
      });
  }, 300);
  return () => clearTimeout(delay);
}, [searchTerm]);

  const handleSelectMedication = (medication) => {
    setSelectedMedications((prev) => [
      ...prev,
      {
        id: medication.id,
        text: medication.text,
        dosis: "",
        duration: "",
        indication: "",
      },
    ]);
    setSearchTerm("");
    setSuggestions([]);
  };

  const updateMedicationField = (index, field, value) => {
    const updated = [...selectedMedications];
    updated[index][field] = value;
    setSelectedMedications(updated);
    if (onMedicationsChange) {
      const payload = updated.map(({ id, dosis, duration, indication }) => ({
        id,
        dosis,
        duration,
        indication,
      }));
      onMedicationsChange(payload);
    }
  };

  const removeMedication = (index) => {
    const updated = selectedMedications.filter((_, i) => i !== index);
    setSelectedMedications(updated);
    if (onMedicationsChange) {
      const payload = updated.map(({ id, dosis, duration, indication }) => ({
        id,
        dosis,
        duration,
        indication,
      }));
      onMedicationsChange(payload);
    }
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

  return (
    <Section>
      <SectionTitle>PRESCRIPCIÓN MÉDICA</SectionTitle>

      <FormRow2 className="single-column">
        <FormGroup2 style={{ position: "relative" }}>
          <Label2>Buscar medicamento por nombre</Label2>
          <Input3
            type="text"
            placeholder="Ej: Paracetamol"
            value={searchTerm}
            
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {suggestions.length > 0 && (
            <SuggestionBox>
              {suggestions.map((item) => (
                <SuggestionItem key={item.id} onClick={() => handleSelectMedication(item)}>
                  {item.text}
                </SuggestionItem>
              ))}
            </SuggestionBox>
          )}
        </FormGroup2>
      </FormRow2>

      {selectedMedications.map((med, index) => (
        <div key={index}>
          <h4 style={{ marginTop: "20px" }}>{med.text}</h4>

          <FormRow2 className="two-columns">
            <FormGroup2>
              <Label2>Dosis</Label2>
              <Input3
                type="text"
                value={med.dosis}
                onChange={(e) => updateMedicationField(index, "dosis", e.target.value)}
                onKeyDown={(e) => handleInputTypeValidation(e, "textOnly")}
                onPaste={(e) => handlePasteValidation(e, "textOnly")}
              />
            </FormGroup2>
            <FormGroup2>
              <Label2>Duración</Label2>
              <Input3
                type="text"
                value={med.duration}
                onChange={(e) => updateMedicationField(index, "duration", e.target.value)}
                onKeyDown={(e) => handleInputTypeValidation(e, "textOnly")}
                onPaste={(e) => handlePasteValidation(e, "textOnly")}
              />
            </FormGroup2>
          </FormRow2>

          <FormRow2 className="two-columns">
            <FormGroup2>
              <Label2>Indicaciones</Label2>
              <TextArea2
                value={med.indication}
                onChange={(e) => updateMedicationField(index, "indication", e.target.value)}
                onKeyDown={(e) => handleInputTypeValidation(e, "textOnly")}
                onPaste={(e) => handlePasteValidation(e, "textOnly")}
              />
            </FormGroup2>
            <FormGroup2>
              <Label2>Eliminar</Label2>
              <button
                type="button"
                onClick={() => removeMedication(index)}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#e74c3c",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "7px",
                }}
              >
                Quitar
              </button>
            </FormGroup2>
          </FormRow2>
        </div>
      ))}
    </Section>
  );
};

export default PrescriptionSection;
