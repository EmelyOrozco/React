import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link} from 'react-router-dom';
import './App.css'; 

function PacientesDetails() {
  const { id } = useParams();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    async function fetchPatientData() {
      try {
        const response = await fetch(`https://localhost:7109/api/Pacientes/${id}`);
        const data = await response.json();
        setPatientData(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener los datos del paciente:', error);
      }
    }
    fetchPatientData();
  }, [id]);

  if (!patientData) {
    return <div>Cargando...</div>;
  }

  return (  
    <div>
      <div className="patient-details">
        <h2>Detalles del Paciente</h2>
        <p><strong>Nombre:</strong> {patientData.nombre}</p>
        <p><strong>Apellido:</strong> {patientData.apellido}</p>
        <p><strong>Fecha de Nacimiento:</strong> {patientData.fechaNaciemiento}</p>
        <p><strong>Dirección:</strong> {patientData.direccion}</p>
        <p><strong>Diagnóstico:</strong> {patientData.diagnostico}</p>
        <p><strong>Cantidad de Terapias:</strong> {patientData.cantidadDeTerapias}</p>
        <p><strong>Necesidad del Paciente:</strong> {patientData.necesidadDelPaciente}</p>
        <h2>Historial del paciente</h2>
        <p>{patientData.historial}</p>
      </div>
      <div className="buttons-container">
        <Link to={`/Seguimientos/${patientData.id}`} className="action-button">Seguimientos</Link>
        <button className="action-button">Nuevo seguimiento</button>
     </div>  
     </div>
  );
}

export default PacientesDetails; 