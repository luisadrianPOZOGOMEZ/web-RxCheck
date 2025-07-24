// src/components/organisms/DoctorSection.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import FormGroup2   from "../molecules/FormGroup2";
import FormRow2     from "../molecules/FormRow2";
import SectionTitle from "../molecules/SectionTittle";
import Input3       from "../atoms/Input3";
import Label2       from "../atoms/Label2";
import Select2      from "../atoms/Select2";

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

const Loader = styled.p`
  padding: 25px;
  text-align: center;
  color: #647be1;
`;

const ErrorMsg = styled.p`
  padding: 25px;
  text-align: center;
  color: red;
`;

/**
 * Recibe la CURP del médico como prop ‑ normalmente
 * guardada en contexto / localStorage durante el login.
 */
const DoctorSection = ({ curp }) => {
  const [doctorData, setDoctorData] = useState(null);
  const [loading,     setLoading]   = useState(true);
  const [error,       setError]     = useState("");

  useEffect(() => {
    if (!curp) return;

    fetch(`https://api.rxcheck.icu/user/users/${curp}`)
      .then(async (res) => {
        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || "Error al obtener datos.");
        }
        return res.json();
      })
      .then((data) => {
        setDoctorData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("DoctorSection ➜", err);
        setError("No se pudieron cargar los datos del médico.");
        setLoading(false);
      });
  }, [curp]);

  if (loading) return <Loader>Cargando datos del médico…</Loader>;
  if (error)   return <ErrorMsg>{error}</ErrorMsg>;

  /* ------------------------------------------------------- */
  /* 📌  Campos mapeados                                       */
  /* ------------------------------------------------------- */
  const {
    nombre               = "",
    apellidoPaterno      = "",
    apellidoMaterno      = "",
    curp: curpApi        = "",
    cedulaProfesional    = "",
    rfc                  = "",
    telefono             = "",
    email                = "",
    role                 = ""  // ej. "medico"
  } = doctorData;

  /* 👇 Ejemplo de profesión mapeada a los <option> */
  const profesionValue = (() => {
    switch (role) {
      case "medico":             return "medico";
      case "medico_homeopata":   return "medico_homeopata";
      case "cirujano_dentista":  return "cirujano_dentista";
      case "medico_veterinario": return "medico_veterinario";
      case "lic_enfermeria":     return "licenciado_enfermeria";
      default:                   return "";
    }
  })();

  return (
    <Section>
      <SectionTitle>DATOS&nbsp;DEL&nbsp;MÉDICO&nbsp;PRESCRIPTOR</SectionTitle>

      {/* Nombre y cédula */}
      <FormRow2 className="two-columns">
        <FormGroup2>
          <Label2 htmlFor="medico_nombre">
            Nombre Completo <span className="required">*</span>
          </Label2>
          <Input3
            id="medico_nombre"
            name="medico_nombre"
            value={`${nombre} ${apellidoPaterno} ${apellidoMaterno}`.trim()}
            readOnly
          />
        </FormGroup2>

        <FormGroup2>
          <Label2 htmlFor="cedula_profesional">
            Cédula Profesional <span className="required">*</span>
          </Label2>
          <Input3
            id="cedula_profesional"
            name="cedula_profesional"
            value={cedulaProfesional}
            readOnly
          />
        </FormGroup2>
      </FormRow2>

      {/* Profesión y especialidad (solo profesión se autocompleta) */}
      <FormRow2 className="two-columns">
        <FormGroup2>
          <Label2 htmlFor="profesion">
            Profesión <span className="required">*</span>
          </Label2>
          <Select2 id="profesion" name="profesion" value={profesionValue} disabled>
            <option value="">Seleccione…</option>
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
          <Input3
            id="especialidad"
            name="especialidad"
            placeholder="—"
            readOnly
          />
        </FormGroup2>
      </FormRow2>

      {/* Institución y teléfono */}
      <FormRow2 className="two-columns">
        <FormGroup2>
          <Label2 htmlFor="institucion_titulo">
            Institución que Expidió el Título <span className="required">*</span>
          </Label2>
          <Input3
            id="institucion_titulo"
            name="institucion_titulo"
            placeholder="—"
            readOnly
          />
        </FormGroup2>

        <FormGroup2>
          <Label2 htmlFor="telefono">Teléfono</Label2>
          <Input3
            id="telefono"
            name="telefono"
            value={telefono}
            readOnly
          />
        </FormGroup2>
      </FormRow2>

      {/* RFC y correo */}
      <FormRow2 className="two-columns">
        <FormGroup2>
          <Label2 htmlFor="rfc">RFC</Label2>
          <Input3
            id="rfc"
            name="rfc"
            value={rfc}
            readOnly
          />
        </FormGroup2>

        <FormGroup2>
          <Label2 htmlFor="email_medico">Correo</Label2>
          <Input3
            id="email_medico"
            name="email_medico"
            type="email"
            value={email}
            readOnly
          />
        </FormGroup2>
      </FormRow2>

      {/* Domicilio (no viene en el JSON de ejemplo, lo dejamos editable si lo deseas) */}
      <FormRow2 className="single-column">
        <FormGroup2>
          <Label2 htmlFor="domicilio_establecimiento">
            Domicilio del Establecimiento de Atención Médica <span className="required">*</span>
          </Label2>
          <Input3
            id="domicilio_establecimiento"
            name="domicilio_establecimiento"
            placeholder="—"
            readOnly
          />
        </FormGroup2>
      </FormRow2>
    </Section>
  );
};

export default DoctorSection;
