import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Listado from "./Listado";
import "../Stylesheets/Login.css";

export const Login = () => {
  const [miLogin, setMiLogin] = useState(false);
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (miLogin) {
      navigate("/listado");
    }
  }, [miLogin, navigate]);

  function iniciarSesion(e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("¡Completar todos los campos para continuar!");
    } else {
      if (usu === "Usuario" && pas === "1234") {
        setMiLogin(true);
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin(false);
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (
    <div
      className="container"
    >
      <form id="form_login">
        <div>
          <h1>Webpage Login</h1>
          <label htmlFor="txtusu">
            <strong>Username</strong>
          </label>
          <input
            type="text"
            id="txtusu"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsu(e.target.value)}
            required
          />
        </div>
            <div>
          <label htmlFor="txtpas">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            id="txtpas"
            className="form-control"
            placeholder="password"
            onChange={(e) => setPas(e.target.value)}
            required
          />
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          value="Login"
          onClick={iniciarSesion}
        />
      </form>

      {miLogin === "true" && <Listado usu={usu} />}
    </div>
  );
};
