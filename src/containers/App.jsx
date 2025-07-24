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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  // const logged = UserContext(UserContext);

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route
            path="/home"
            element={
              <RouteProtected>
                <Home />
              </RouteProtected>
            }
          />
          <Route
            path="/ver-paciente"
            element={
              <RouteProtected>
                <VerPaciente />
              </RouteProtected>
            }
          />
          <Route
            path="/Crear-Recetas"
            element={
              <RouteProtected>
                <Recetas />
              </RouteProtected>
            }
          />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
