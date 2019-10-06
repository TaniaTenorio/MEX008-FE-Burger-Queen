import React from 'react';
import Buttons from '../components/Buttons';
import { Link } from 'react-router-dom';
import next from '../img/next.png';
import '../styles/tabla.css';

class OrdenCocina extends React.Component {
    render () {
        return( 
            <div>    
                {/* // state = JSON.parse(localStorage.getItem('clientes')); */}
                
                
                    <div className="tablaCocina">
                        {/* <h1>{this.state.name}</h1> */}
                        <h1>Orden de: Fabiola</h1>


                        <table className="Tabla">
                            <tr>
                            <td><strong>Cantidad</strong></td>
                            <td><strong>Pedido</strong></td>
                            <td><strong>Observaciones</strong></td>
                            </tr>

                            <tr>
                            <td>1</td>
                            <td>Gula</td>
                            <td>Sin Queso </td>
                            </tr>

                            <tr>
                            <td>1</td>
                            <td>Sobervia</td>
                            <td>Sin Cebolla</td>
                            </tr>

                            <tr>
                            <td>2</td>
                            <td>Banana Limbo</td>
                            <td>---</td>
                            </tr>

                        </table>
                    
                    
                    </div>


                    <div className="Boton-siguiente">
                        <Link className="boton" to="/ListaDeOrdenes">
                            <img className="next" src={next} alt="Boton siguiente"/>
                        </Link>
                    </div>

            </div>        
        )
    }
}

export default OrdenCocina