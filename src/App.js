import './App.css';
import Logo from "./imagenes/testimonio-idiota.jpg";
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejaClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className="logo"
        src={Logo}
        alt="Logo"
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejaClic={manejaClic} />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejaClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
