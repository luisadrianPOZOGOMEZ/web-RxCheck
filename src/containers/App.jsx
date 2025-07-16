import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react';
import UserContextProvider, { UserContext } from '../context/UserContext';
import RouteProtected from './RouteProtected';
import Landing from '../pages/Landing'
import Register from '../pages/Register'
import Home from "../pages/Home";
import VerPaciente from "../pages/VerPaciente";
import Recetas from '../pages/Recetas';
import Login from '../pages/Login';
import Privacy from '../pages/PrivacyPolicy';


function App() {
  // const logged = UserContext(UserContext);

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/ver-paciente" element={<VerPaciente />} />
          <Route path="/Crear-Recetas" element={<Recetas/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/privacy" element={<Privacy/>} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
