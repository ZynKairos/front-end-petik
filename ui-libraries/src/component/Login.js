import React from 'react'
import "bulma/css/bulma.min.css";

const Login = () => {
  return (
    <section className='hero has-background-grey-light is-fullheight is-fullwidth'>
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4">
              <form className='box'>
                <h3 className='title has-text-primary'>Login</h3>
                <div className="field">
                  <label for="email">Email</label>
                  <input type="email" className='input' placeholder='Masukkan Email' />
                </div>
                <div className="field">
                  <label for="password">Password</label>
                  <input type="password" className='input' placeholder='Masukkan Password' />
                </div>
                <div className="field">
                  <button className='button is-success is-fullwidth'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login
