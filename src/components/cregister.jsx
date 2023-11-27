import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/register.css';
import axios from 'axios';
import Validation from './cregistervalidation';
import SVGImage from './images/register.svg';
import EyeClosed from './images/eyeclosedicon.svg';
import EyeOpen from './images/eyeopenicon.svg';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const { name, email, password } = values;

    try {
      const response = await fetch('https://6528c37e931d71583df26ee3.mockapi.io/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="register-container">
          <div className="register-form">
            <h1 className="logo-title">
              <span>Skill</span>
              <span>Mastery</span>
            </h1>
            <form id="regis-form" onSubmit={handleSubmit}>
              <div className="input-form">
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Nama" name="name" onChange={handleInput} />
                <div className="textalert">{errors.name && <span>{errors.name}</span>}</div>
              </div>
              <div className="input-form">
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" name="email" onChange={handleInput} />
                <div className="textalert">{errors.email && <span>{errors.email}</span>}</div>
              </div>
              <div className="input-form">
                <div className="input-password">
                  <label htmlFor="password"></label>
                  <input type="password" id="password" placeholder="Password" name="password" onChange={handleInput} />
                  <div>{errors.password && <span className="textalert">{errors.password}</span>}</div>
                </div>
              </div>
              <div className="button">
                <button type="submit" className="btn">
                  Daftar
                </button>
              </div>
            </form>
            <p>
              Sudah Punya Akun?{' '}
              <a href="">
                <b>Login</b>
              </a>
            </p>
          </div>
        </div>
        <div className="img-container">
          <img src={SVGImage} />
        </div>
      </div>
    </div>
  );
}

export default Register;
