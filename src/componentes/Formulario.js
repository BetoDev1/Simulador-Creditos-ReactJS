import React, {useState, Fragment} from 'react';
import { calcularTotal } from '../helpers';


const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando}) => {

// Definir el state inicial del error
const [error, guardarError] = useState(false);
    
// Validaciones
const enviarValores = e => {
    e.preventDefault();
    
    if (cantidad === 0 || plazo === '') {
       guardarError(true);
       return
    }
        guardarError(false);

        // Habilito el spinner
        guardarCargando(true);

        setTimeout(() => {
            // Calcular el total
            const total = calcularTotal(cantidad, plazo);
            console.log(total);

            // Pasar el total al componente principal, una vez calculado
            guardarTotal(total);
            //Deshabilitar el spinner
            guardarCargando(false);
            }, 3000);
    

        
    }



    return ( 
    
        <Fragment> 
    
    <form onSubmit={enviarValores}>
       
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" 
                            onChange={ e => guardarCantidad(parseInt(e.target.value)) }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => guardarPlazo(parseInt(e.target.value)) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
        </form>
        
        {error ? <p className="error">Todos los campos son obligatorios</p> : null}
       

        </Fragment>
     );
}
 
export default Formulario;