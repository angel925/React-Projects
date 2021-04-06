import { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Furmulario";
import Cita from "./components/Cita";



function App() {

  //agregando las citas al localStorage
let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  // arrego de citas el arreglo que contiene e listado de citas en plural citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // useEffect para saber cuando e estado de useState cambia de estado
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    
    if (citasIniciales) {
      localStorage.setItem('citas',JSON.stringify(citas));
    }
    else{
      localStorage.setItem('citas',JSON.stringify([]));

    }
  }, [citas]);


  //funcion que va a tomar las citas actules y agregre la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Funcion que elimina  una cita por su id
  const eliminarCita = (id) => {
    // se crea un nuevo arreglo con filter para que me traiga las diferentes a el elemento selecciionada
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };
  // cuando no hay citas

  const titulo = citas.length ? "Administra Citas" : "No hay Citas"
  return (
    <Fragment>
      <div className="container">
        <div className="border-top">
          <h1>Administrador de Pascientes</h1>
        </div>
        <div className="row">
          <div className="one-half column">
            {/*componente formulario*/}
            <Formulario 
            crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {/*componente listar citas*/}
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita 
              key={cita.id} 
              cita={cita} 
              eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
