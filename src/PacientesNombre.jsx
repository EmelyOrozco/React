

import React, { useEffect, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate} from 'react-router-dom';
import './App.css';
import Cookies from 'universal-cookie';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function PacientesNombre() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const cookies = new Cookies();
  const navigate = useNavigate();

  const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
  
   useEffect (() => {
     const listen = onAuthStateChanged(auth, (user) =>{
       if(user) {
         setAuthUser(user);
       } else {
         setAuthUser(null);
       }
     });
   }, []);
  }

  const cerrarSesion = () => {
    cookies.remove('idUsuario', { path: '/' });
    cookies.remove('Correo', { path: '/' });
    cookies.remove('Clave', { path: '/' });
    navigate('/');
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://localhost:7109/api/Pacientes/");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(()=>{
    if(!cookies.get('idUsuario')){
       navigate(`/`);
   }
  },[]);

  const filteredPatients = data ? data.filter(patient => 
    patient.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.apellido.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (  
    <div>
      <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesion</button>
      <div>{authUser ? <h1>{`¡Bienvenid@, ${authUser.email}!`}</h1> : null} </div>
  
      <h1>Pacientes</h1>
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar"
          placeholder="Buscar pacientes..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>     
      <div className="pacientes-container">
        {filteredPatients.map(patient => (
          <Link key={patient.idPaciente} to={`/pacientesdetails/${patient.idPaciente}`} className="paciente-card">
            <div className="info">
              <FaUserAlt className="icon"/>
              <div>
                <strong></strong> {patient.nombre} {patient.apellido}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
 
}

export default PacientesNombre;