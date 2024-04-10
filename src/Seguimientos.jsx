import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; 

function Seguimientos() {
  const { id } = useParams();
  const [patientData, setPatientData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPatientData() {
      if (!id) {
        return; // Si id es undefined, salir de la función
      }

      try {
        const response = await fetch(`https://localhost:7109/api/Seguimientos/${id}`);
        
        if (!response.ok) {
          throw new Error('Error al obtener los datos del paciente');
        }

        const data = await response.json();
        setPatientData(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener los datos del paciente:', error.message);
        setError(error.message);
      }
    }
    
    fetchPatientData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (Object.keys(patientData).length === 0) {
    return <div>Cargando...</div>;
  }

  return (  
    <div>
      <div className="patient-details">
        <h2>Seguimientos</h2>
        <p><strong>Fecha de seguimiento </strong> {patientData.FechaSeguimiento}</p>
        <p><strong>Sensacion </strong> {patientData.Sensacion}</p>
        <p><strong>Medicamentos </strong> {patientData.Medicamentos ? 'Sí' : 'No'}</p>
        <p><strong>Hielo </strong> {patientData.Hielo ? 'Sí' : 'No'}</p>
        <p><strong>Observaciones </strong> {patientData.Observaciones}</p>
      </div> 
     </div>
  );
}

export default Seguimientos;
