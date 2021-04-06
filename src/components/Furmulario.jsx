import { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

// aplicamos destructurig para pasarle la funcion crear cita que viene desde App.js
const Formulario = ({crearCita}) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  //use Satate para el error

  const [error, actualizarError] = useState(false);

  //Función que se ejecuta una vez el usuario empieza a escribir...
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // destructurig
  const {  mascota, propietario, fecha, hora, sintomas } = cita;

  //cuando el usuario presiona agragrar cita
  const submitCita = (e) => {
    e.preventDefault();
    // validar el formulario
    // trim() elimina los espacios en blanc en ambos sentidos der ,izq
    if ( mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || 
    hora.trim() === "" || sintomas.trim() === ""
    ) {
      actualizarError(true);

      return;
    }
    //llamamos la funcion de nuevo para que el mesaje de la validacion no se muestre más
    actualizarError(false);

    // asignar un id
    cita.id = uuidv4();
    
    //crear a cita
    crearCita(cita);

    //reiniciamos el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    })
  };


  return (
    <Fragment>
      <h2>Crear Cita</h2>
      

      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label htmlFor="">Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la Mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label htmlFor="">Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          id=""
          placeholder="Sintomas que presenta la mascota"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        {/*si hay un error se ejecuta la alerta de lo contrario es null*/}
      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

        <button type="sumit" className="u-full-width button-add">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

//propTypes documentando el codigo, o saber que son y cuales son las funciones.

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}


export default Formulario;
