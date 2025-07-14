import FormGroup2 from "../molecules/FormGroup2";
import FormRow2 from "../molecules/FormRow2";
import SectionTitle from "../molecules/SectionTittle";
import Input3 from "../atoms/Input3";
import Label2 from "../atoms/Label2";
import styled from "styled-components";
import { useEffect, useState } from "react";

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

const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 8px;
`;

const DateSection = () => {
  const [today, setToday] = useState(null); // null hasta obtenerla de la API
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((data) => {
        const realDate = new Date(data.datetime);
        const realDateStr = realDate.toISOString().split("T")[0];
        setToday(realDateStr); // solo aquí se muestra el campo
      })
      .catch((err) => {
        console.error("Error obteniendo hora confiable:", err);
        alert("❌ No se pudo verificar la fecha en línea. Verifica tu conexión.");
      });
  }, []);

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setSelectedDate(selected);
    if (selected !== today) {
      setError("⚠️ La fecha de expedición debe ser exactamente la de hoy: " + today);
    } else {
      setError("");
    }
  };

  const handleLugarKeyDown = (e) => {
    const key = e.key;
    const allowedKeys = [
      "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Escape"
    ];
    const isValid = /^[a-zA-Z0-9 ]$/.test(key);
    if (e.ctrlKey || e.metaKey || allowedKeys.includes(key)) return;
    if (!isValid) e.preventDefault();
  };

  const handleLugarPaste = (e) => {
    const pasted = e.clipboardData.getData("text");
    if (!/^[a-zA-Z0-9 ]+$/.test(pasted)) e.preventDefault();
  };

  return (
    <Section>
      <SectionTitle>FECHA DE EXPEDICIÓN</SectionTitle>
      <FormRow2 className="two-columns">
        <FormGroup2>
          <Label2 htmlFor="fecha_expedicion">
            Fecha <span className="required">*</span>
          </Label2>

          {/* Solo renderiza el campo si ya se obtuvo la fecha real */}
          {today ? (
            <>
              <Input3
                type="date"
                id="fecha_expedicion"
                name="fecha_expedicion"
                value={selectedDate}
                onChange={handleDateChange}
                min={today}
                max={today}
                required
              />
              {error && <ErrorText>{error}</ErrorText>}
            </>
          ) : (
            <p>Cargando fecha segura...</p>
          )}
        </FormGroup2>

        <FormGroup2>
          <Label2 htmlFor="lugar_expedicion">
            Lugar <span className="required">*</span>
          </Label2>
          <Input3
            type="text"
            id="lugar_expedicion"
            name="lugar_expedicion"
            required
            onKeyDown={handleLugarKeyDown}
            onPaste={handleLugarPaste}
          />
        </FormGroup2>
      </FormRow2>
    </Section>
  );
};

export default DateSection;
