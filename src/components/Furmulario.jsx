import { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <label htmlFor="">Nombre de la Mascota</label>
      <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre Mascota"
      />

      <label htmlFor="">Nombre del Dueño</label>
      <input
        type="text"
        name="propietario"
        className="u-full-width"
        placeholder="Nombre dueño de la Mascota"
      />

      <label htmlFor="">Fecha</label>
      <input 
      type="date" 
      name="fecha" 
      className="u-full-width" />

      <label htmlFor="">Hora</label>
      <input 
      type="time" 
      name="hora" 
      className="u-full-width" />

      <label htmlFor="">Sintomas</label>
      <textarea 
      name="sintomas" 
      className="u-full-width" 
      id=""  
      placeholder="Sintomas que presenta la mascota"
      ></textarea>

      <button
      type="sumit"
      className = "u-full-width button-add"

      
      >
          Agregar Cita
      </button>


    </Fragment>


  );
};

export default Formulario;
