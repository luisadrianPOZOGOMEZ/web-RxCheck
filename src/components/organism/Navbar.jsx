// src/components/organisms/NavBar.jsx
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarWrapper = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #647be1;
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const MenuItem = styled.li``;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active,
  &:hover {
    background: #647be1;
    color: white;
  }
`;

const Navbar = () => (
  <NavbarWrapper>
    <Container>
      <Brand>🏥 Sistema Médico</Brand>
      <Menu>
        <MenuItem>
          <MenuLink to="/home">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/ver-paciente">Ver Pacientes</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/Crear-Recetas">Crear Receta</MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  </NavbarWrapper>
);

export default Navbar;

