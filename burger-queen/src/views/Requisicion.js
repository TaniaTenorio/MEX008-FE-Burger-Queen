import React from 'react';
import '../styles/textTips.css';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';



class Requisiciones extends React.Component{
    render (){
        return (
            <div className="requisiciones">
                <h2 id="titulo">Requisiciones</h2>


                <table className="tabla">
                    <tr>
                    <th>Cantidad</th>
                    <th>Insumos</th>
                    </tr>

                    <tr>
                    <td>3 pz</td>
                    <td>Medallon Gula</td>
                    </tr>

                    <tr>
                    <td>200 gr</td>
                    <td>Cacahuate</td>
                    </tr>

                    <tr>
                    <td>8 kg</td>
                    <td>Cebolla</td>
                    </tr>

            
                </table>
                <Link to="/">
                    <Button className="btn"  size="lg"   text = "Salir">Finalizar</Button>
                </Link>    
            </div>

        );
    }
}
export default Requisiciones