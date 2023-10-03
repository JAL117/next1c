'use client'
import React, { useState } from 'react';
import '../styles/all.css';
import '../styles/login.css';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación del correo electrónico (simulada)
    if (!email.includes('@')) {
      setEmailError('El correo electrónico debe contener "@"');
      return;
    }

    // Validación de la contraseña (simulada)
    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Simulación de inicio de sesión exitoso
    if (email === 'jagvms117@gmail.com' && password === '1234567') {
      // Redirigir al usuario a la página deseada después de un inicio de sesión exitoso
      window.location.href = '/selectorp';
    } else {
      // Si las credenciales no son válidas, muestra un mensaje de error
      console.log('Credenciales inválidas');
      alert('Credenciales inválidas');
    }
  };
  return (
    <div className="login__body">
      <div className="login__box">
        <h2>Inicia sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input__box">
            <input
              required
              type="email"
              id="emailInput"
              placeholder="Email o número de teléfono"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}

          <div className="input__box">
            <input
              required
              type="password"
              id="passwordInput"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}

          <div>
            <button className="submit" id="submitButton">
            Iniciar Sesión   
            </button>
          </div>
        </form>

        <div className="support">
          <div className="remember">
            <span>
              <input type="checkbox" />
            </span>
            <span>Recuérdame</span>
          </div>
          <div className="help">
            <a href="#">¿Necesitas ayuda?</a>
          </div>
        </div>

        <div className="login__footer">
          <div className="sign__up">
            <p>
              ¿Primera vez en Netflix? <a href="#">Suscríbete ahora.</a>
            </p>
          </div>

          <div className="terms">
            <p>
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot. <a href="#">Más info.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
