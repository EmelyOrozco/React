import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import md5 from 'md5';
import axios from 'axios';
import './App.css';
import Rehab from './Rehab.png';
import Cookies from 'universal-cookie';

import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const history = useNavigate()

const Login = (e) => {
   e.preventDefault();
   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential)   => {
        console.log(userCredential);
        history(`/Menu`);
     })
     .catch((error) => {
        console.log(error);
     })

};


  return (
   <div className="login-wrapper">
      <img className= "logo" src={Rehab} alt=""/>
      <div className="container">
        <div className="login-container">
         <form onSubmit  ={Login}>
           <label>User</label>
             <br />
              <input
               type="email"
               name="email"
               value={email}
                onChange={(e) => setEmail(e.target.value)}/>
               <br />
            <label>Password</label>
               <br />
               <input
               type="password"
               name="password"
               value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
            <button type="submit" className="btn btn-primary" onClick={Login}>Ingresar</button>
          </form>       
        </div>
      </div>
    </div>
   );
}
export default Login;