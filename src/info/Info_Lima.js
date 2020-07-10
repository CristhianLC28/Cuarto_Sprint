import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Avatar from '@material-ui/core/Avatar';
import logo from '../logo1.jpg';
import img3 from '../imagenes/img3.png';
import us1 from '../imagenes/user1.jpg';
import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';

class Lug extends Component {
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
                    <img src={img3} class="card-img" alt="logo" height="350" />
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
                                    La Ciudad de los Reyes, el título nobiliario que hasta ahora ostenta,
                                    Lima crece como metrópoli de manera rápida y moderna. Siendo la única
                                    ciudad capital de América situada a orillas del mar, Lima es populosa
                                    (más de 8 millones de habitantes) y está llena de lugares de interés y
                                    restaurantes de fama internacional. Es la capital gastronómica de América y
                                    sólo por ese motivo, uno de los tantos que tiene, se convierte en un agradable
                                    foco turístico. Sus playas, de igual manera, nos ofrecen la belleza de sus mujeres
                                    y de sus olas. Sus barrios, por otra parte, nos enseñaran el corazón profundo de
                                    una urbe que demuestra el pujante destino del Perú.
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
                                <th scope="col">Lugares Concurrentes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <li>Parque del Amor (Miraflores)</li>
                                    <li>Plaza de Armas</li>
                                    <li>Monasterio de San Francisco de Lima</li>
                                    <li>Circuito Mágico del Agua (Parque de la Reserva)</li>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="container " style={{ margin: 10 }}>
                    <h4>Comentarios</h4>
                    <tr>
                        
                    <td ><Avatar alt="Remy Sharp" src={us1} style={{ margin: 5 }}/></td>
                    <textarea name="comentarios" cols="150" />
                    <input class="btn btn-outline-primary btn-sm" type="submit" value="Enviar"/>
                    </tr>
                </div>
                
            </React.Fragment>
        );
    }
}

export default (Lug);