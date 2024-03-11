import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../css/login.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebaseconfig/firebase'; // Importamos la instancia de Firebase
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

// Agrega los iconos sólidos y de marcas al library
library.add( faGoogle);

function Login() {
  const [dbStatus, setDbStatus] = useState(null);
  const navigate = useNavigate(); // Inicializamos useNavigate

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      checkDbConnection();
      // Redirigir a la página principal o realizar otras acciones
      navigate('/admin'); // Redirigir a la página de inicio después de un inicio de sesión exitoso
    } catch (error) {
      console.error(error);
      // Alerta de error de inicio de sesión
      alert("Error al iniciar sesión. Por favor, intenta de nuevo.");
    }
  };

  const checkDbConnection = async () => {
    const db = getFirestore();
    try {
      await getDoc(doc(db, "test", "connection"));
      setDbStatus("Conexión exitosa con la base de datos");
    } catch (error) {
      setDbStatus(
        "Error al conectar con la base de datos. Por favor, revisa la configuración."
      );
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Usuario autenticado, redireccionar o realizar acciones
        navigate('/user'); // Redirigir si ya está autenticado
      } else {
        // Usuario no autenticado, mostrar formulario de login
      }
    });

    return () => unsubscribe(); // Limpieza del evento al desmontar el componente
  }, []);

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            <FontAwesomeIcon icon={['dog']} /> Usuario
          </label>
          <input type="text" className="form-control" id="username" name="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <FontAwesomeIcon icon={['lock']} /> Contraseña
          </label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Acceder</button>
        </div>
        <hr />
        <div className="text-center">
          <button type="button" className="btn btn-danger" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={['fab', 'google']} /> Login con Google
          </button>
        </div>
      </form>
      {dbStatus && <div className="alert alert-info mt-3">{dbStatus}</div>}
    </div>
  );
}

export default Login;
