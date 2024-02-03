import React from "react";
import "./Formulario.css";

export const Formulario = () => {
  const [input, setInput] = React.useState({
    identificacion: 0,
    nombre: "",
    apellido: "",
    edad: 0,
    direccion: "",
  });

  function evitarNegativo(e) {
    if (e.key === "-" || e.key === "." || e.key === ",") e.preventDefault();
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    alert("Usuario creado!");
    setInput({
      identificacion: 0,
      nombre: "",
      apellido: "",
      edad: 0,
      direccion: "",
    });
  };

  return (
    <div>
      <h1 className="title">Formulario</h1>
      <form
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <h2>Crea un usuario</h2>
        <div className="form">
          <label htmlFor="identificacion">Identificacion: </label>{" "}
          <input
            id="identificacion"
            type="number"
            value={input.identificacion}
            name="identificacion"
            onChange={(e) => {
              handleChange(e);
            }}
            min="1"
            step="1"
            onKeyDown={evitarNegativo}
            placeholder=" Identificacion..."
            className="fields"
          />
          <br />
          <label htmlFor="nombre">Nombre: </label>
          <input
            id="nombre"
            type="text"
            value={input.nombre}
            autoComplete="off"
            maxLength="20"
            name="nombre"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder=" Nombre..."
            className="fields"
            required
          />
          <br />
          <label htmlFor="apellido">Apellido: </label>{" "}
          <input
            id="apellido"
            type="text"
            value={input.apellido}
            name="apellido"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder=" Apellido..."
            className="fields"
            required
          />
          <br />
          <label htmlFor="edad">Edad: </label>{" "}
          <input
            id="edad"
            type="number"
            value={input.edad}
            name="edad"
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={evitarNegativo}
            pattern="^[^\D]+"
            min="1"
            step="1"
            placeholder=" Edad..."
            className="fields"
          />
          <br />
          <label htmlFor="direccion">Direccion: </label>{" "}
          <input
            id="direccion"
            type="text"
            value={input.direccion}
            name="direccion"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder=" Direccion..."
            className="fields"
            required
          />
        </div>

        <button type="submit" className="btn">
          Crear usuario
        </button>
      </form>
    </div>
  );
};
