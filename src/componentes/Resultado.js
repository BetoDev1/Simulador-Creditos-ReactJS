import React from 'react'

const Resultado = ({total, plazo, cantidad}) => {
    return ( 
       <div className='u-full-Width resultado'>
              <h3>Resumen</h3>
                <p>Cantidad Prestada: ${cantidad}</p>
                <p>Plazo: {plazo} meses</p>
                <p>El pago mensual es de: {(total/plazo).toFixed(2)}</p>
                <p>Total a Pagar: ${total}</p>


       </div>
     );
}
 
export default Resultado;