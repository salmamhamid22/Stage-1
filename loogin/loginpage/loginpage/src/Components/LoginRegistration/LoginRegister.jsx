import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Navbar from '../navbar'; 

const LoginRegister = () => {



  return (
    <>
      <Navbar />
      <div className={`wrapper`}>
        <div className="form-box login">
          <form action=''>
            <h1>Se connecter</h1>
            <div className="input-box">
              <input type='text' placeholder='Identifiant' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type='password' placeholder='Mot de passe' required />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type='checkbox' /> Se souvenir</label>
              <a href='#'> Mot de passe oublier?</a>
            </div>
            <button type='submit'> Se connecter</button>
            <div className="register-link">
             
            </div>
          </form>
        </div>
      
      </div>
    </>
  );
}

export default LoginRegister;
