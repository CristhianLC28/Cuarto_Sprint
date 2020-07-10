import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img12 from '../imagenes/img12.png';
import us3 from '../imagenes/user3.jpg';
import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';
import Avatar from '@material-ui/core/Avatar';


class Vinicunca extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" >
                    <Toolbar >
                        <Button href="/Pag_Principal" ><img src={logo} alt="logo" height="65" /></Button>
                        <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                        >
                            <Button color="textPrimary" variant="outlined" href="/Turistico" style={{ left: -20 }} >
                Lugares Turisticos
                    </Button>
                            <Button color="textPrimary" variant="outlined" href="/Lugares_Populares" style={{ left: -10 }} >
                            Departamentos
                    </Button>
                        </Grid>
                        <Boton />
                    </Toolbar>
                </AppBar>

                <div class="card" style={{ margin: 10 }}>
                    <img src={img12} class="card-img" alt="logo" height="350" />
                </div>

                <div class="table col-sm-12" align="center">
                    <table >
                        <thead class="table-success">
                            <tr>
                                <th scope="col">Información</th>
                                <th scope="col">Puntuación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                Vinicunca o Winikunka, llamada también Montaña de Siete Colores,
                                Montaña Arcoíris o Montaña de Colores (los pobladores le llaman Cerro Colorado),
                                es una montaña del Perú con una altitud de 5.200 msnm.
                                Está situada en el camino al nevado Ausangate, en los Andes del Perú,
                                Región Cusco, entre los distritos de Cusipata, provincia de Quispicanchi,
                                y Pitumarca, provincia de Canchis.
                                </td>
                                <br />
                                <br />
                                <br />
                                <br />
                                <Start />
                            </tr>
                        </tbody>
                        <thead class="table-success">
                            <tr>
                                <th scope="col">Clima</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                Todos los viajeros están de acuerdo en que la mejor época del año para visitar la 
                                montaña arco iris es en el mes de agosto, ya que es época seca y ello es excelente para visitarla. Sus ya famosos colores se ven bastante bien.
                                Tienes que intentar evitar días en los que haya llovido (diciembre, enero y febrero) o épocas en los que haya caído una nevada
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="container " style={{ margin: 10 }}>
                    <h4>Comentarios</h4>
                    <tr>
                        
                    <td ><Avatar alt="Remy Sharp" src={us3} style={{ margin: 5 }}/></td>
                    <textarea name="comentarios" cols="150" />
                    <input class="btn btn-outline-primary btn-sm" type="submit" value="Enviar"/>
                    </tr>
                </div>


            </React.Fragment>
        );
    }
}

export default (Vinicunca);