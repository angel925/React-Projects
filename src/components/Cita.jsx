import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => ( 

    <div className = "cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button
        className = "button eliminar u-full-width"
       //se pone como una arrow funtion una vez llamada se ejecuta
       // y se le pasa cita.id por que es la que se toma como referencia para eliminar
        onClick = {()=> eliminarCita(cita.id)}
        
        
        >Eliminar &times;</button>
    </div>
 );

 Cita.proType = {
     cita : PropTypes.object.isRequired,
     eliminarCita: PropTypes.func.isRequired
 }

 
export default Cita;