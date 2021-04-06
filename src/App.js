import { Fragment, useState } from "react";
import Formulario from "./components/Furmulario";

function App() {
  // arrego de citas el arreglo que contiene e listado de citas en plural citas

  const [citas, guardarCitas] = useState([])


  //funcion que va a tomar las citas actules y agregre la nueva

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  };



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
              crearCita = {crearCita}
            
            />
          </div>
          <div className="one-half column">
            {/*componente listar citas*/}
            
            2
            
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
