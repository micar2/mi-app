import React from 'react';
import '../hojasEstilo/Boton.css'

function Boton({texto, esBotonDeClic, manejaClic}) {
    return(
        <button
        className={ esBotonDeClic ?  'boton-clic' : 'boton-reiniciar' }
        onClick={manejaClic}>
            { texto }    
        </button>
    )
}
export default Boton;