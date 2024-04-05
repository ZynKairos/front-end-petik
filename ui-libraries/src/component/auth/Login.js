import React from 'react'
import "bulma/css/bulma.min.css";
import { NavLink } from 'react-router-dom';
import logo from "../image/logo.png" 

const Login = () => {
  return (
      <div className="container py-5 my-5">
        <div className="columns is-centered">
          <div className="column is-4">
            <form className='box'>
              <div class="field has-text-centered">
                <NavLink to={'/'}>
                  <img src={logo} alt="logo-image" width={94} style={{ borderRadius:"50%" }}/>
                </NavLink>
                <h3 className='title has-text-primary me-auto ms-3'>Login</h3>
              </div>                
              <div className="field">
                <label for="email" className='label'>Email</label>
                <input type="email" className='input' placeholder='Masukkan Email' required/>
              </div>
              <div className="field">
                <label for="password" className='label'>Password</label>
                <input type="password" className='input' placeholder='*******' required />
              </div>
              <div className="field">
                <button className='button is-success has-text-white is-fullwidth'>Login</button>
              </div>
              <div class="field">
                <p>
                  Belum punya akun? <NavLink to={'/register'}>Daftar</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login
