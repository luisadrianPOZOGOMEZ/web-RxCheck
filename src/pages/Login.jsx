import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input3 from "../components/atoms/Input3";
import Label2 from "../components/atoms/Label2";
import Button2 from "../components/atoms/Button2";
import FormGroup2 from "../components/molecules/FormGroup2";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center; 
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #647be1;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: #647be1;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HintText = styled.p`
  font-size: 12px;
  color: #e53e3e;
  margin-top: 5px;
  font-style: italic;
`;

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    try {
      const response = await fetch("https://api.rxcheck.icu/user/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.data?.access_token) {
        alert("✅ Login exitoso");
        // Puedes guardar el token en localStorage si necesitas autenticar otras peticiones
        localStorage.setItem("token", data.data.access_token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        navigate("/home");
      } else {
        setServerError(data.message || "Error de autenticación");
      }
    } catch (err) {
      console.error(err);
      setServerError("Error de conexión con el servidor");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Card>
        <Title>Iniciar Sesión</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup2>
            <Label2 htmlFor="email">Correo electrónico</Label2>
            <Input3
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <HintText>{errors.email}</HintText>}
          </FormGroup2>

          <FormGroup2>
            <Label2 htmlFor="password">Contraseña</Label2>
            <Input3
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <HintText>{errors.password}</HintText>}
          </FormGroup2>

          {serverError && <HintText>{serverError}</HintText>}

          <Button2 type="submit">Iniciar sesión</Button2>

          <StyledLink to="/register">
            ¿Aún no tienes cuenta? Regístrate
          </StyledLink>
        </form>
      </Card>
    </>
  );
};

export default Login;
