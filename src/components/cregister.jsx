import React, { useState } from 'react';
import '../css/register.css';
import SVGImage from './images/register.svg';
import EyeClosed from './images/eyeclosedicon.svg';
import EyeOpen from './images/eyeopenicon.svg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    if (newName.length <= 35) {
      setName(newName);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const eyeChange = () => {
    const passwordInput = document.getElementById('password');
    setPasswordVisible(!passwordVisible);

    if (passwordVisible) {
      passwordInput.type = 'password';
    } else {
      passwordInput.type = 'text';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      alert('Semua data harus diisi!');
      return;
    }
  };

  return (
    <div>
      <body>
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
                  <input type="text" id="name" placeholder="Nama" value={name} onChange={handleNameChange} maxLength={35} />
                  <div className="error">
                    {/* Tampilkan pesan maksimal huruf */}
                    {name.length > 50 && <p className="error-message">Maksimal 50 karakter.</p>}
                  </div>
                </div>
                <div className="input-form">
                  <label htmlFor="email"></label>
                  <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                  <div className="error">{/* Tampilkan pesan kesalahan jika email tidak valid */}</div>
                </div>
                <div className="input-form">
                  <div className="input-password">
                    <label htmlFor="password"></label>
                    <input type={passwordVisible ? 'text' : 'password'} id="password" placeholder="Password" />
                    <span id="eyebutton" className="toggle-password" onClick={eyeChange}>
                      <img src={EyeClosed} />
                    </span>
                    <div className="error">
                      <p className="error-message" id="password-error"></p>
                    </div>
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="btn">
                    Daftar
                  </button>
                  <div id="successModal" className="modal">
                    <div className="modal-content">
                      <h2>Berhasil!</h2>
                      <p>Akun Anda telah berhasil Didaftarkan</p>
                      <button type="button" className="success-button" id="openHomepage">
                        Masuk
                      </button>
                    </div>
                  </div>
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
      </body>
    </div>
  );
};

export default Register;
