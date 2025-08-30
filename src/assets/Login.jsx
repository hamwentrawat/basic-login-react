// import React, { useId, useState } from "react";
const Login = ({ onSubmitForm, error, setEmail, email, password, setPassword }) => {

  return (
    <>
      <form action="#" className="sign-in-form" onSubmit={onSubmitForm}>
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input type="submit" value="Login" className="btn solid" />
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
      {/* <>
        {allEntry.map((item) => {
          const { id, email, password } = item;
          return (
            <div key={id}>
              <span>{id}</span> <br />
              <span>{email}</span><br />
              <span>{password}</span>
            </div>
          )
        })}
      </> */}
    </>
  );

}


export default Login;
