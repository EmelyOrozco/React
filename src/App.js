import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PacientesDetails from "./PacientesDetails";
import PacientesNombre from "./PacientesNombre";
import Seguimientos from "./Seguimientos";
import Login from "./Login";

function App() {
  return (  

      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Menu" element={<PacientesNombre/>}/>
          <Route exact path="/pacientesdetails/:id" element={<PacientesDetails/>}/>
          <Route exact path="/Seguimientos/:id" element={<Seguimientos/>}/>

        </Routes>
      </Router>
   
  );
}
export default App;