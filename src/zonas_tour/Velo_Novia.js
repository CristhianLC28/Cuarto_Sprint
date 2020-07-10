import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img14 from '../imagenes/img14.jpg';
import us1 from '../imagenes/user1.jpg';
import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';
import Avatar from '@material-ui/core/Avatar';

class Velo_Novia extends Component {
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
                    <img src={img14} class="card-img" alt="logo" height="350" />
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
                                La Catarata Velo de la Novia, es un recurso natural que se encuentra en el distrito
                                 y provincia de Padre Abad, en la región de Ucayali. La Catarata es considerada el
                                  principal recurso del pueblo de Aguaytia y se ubica dentro del circuito conocido 
                                  como El Boquerón del Padre Abad.El Velo de la Novia, es llamado con este nombre,
                                   por la fina caída de agua que presenta. La Catarata Velo de la Novia presenta
                                    una altura de cuarenta metros  y sus aguas se desplazan hacia una piscina 
                                    natural que se ve rodeada de formaciones rocosas cubiertas de vegetación.
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
                                <th scope="col">Actividades</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                Entre las actividades que el viajero puede practicar en la misma Catarata,
                                 se encuentran, el camping,  el trekking, además de la observación e investigación 
                                 de la flora y fauna local.  Debido a que se encuentra en completo estado natural, 
                                 la catarata puede ser visitada en cualquier época del año, y no presenta horario
                                  de visita alguno.
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

export default (Velo_Novia);