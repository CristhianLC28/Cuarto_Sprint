import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img10 from '../imagenes/img10.jpg';
import us1 from '../imagenes/user1.jpg';
import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';
import Avatar from '@material-ui/core/Avatar';


class Cajamarca extends Component {
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
                    <img src={img10} class="card-img" alt="logo" height="350" />
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
                                Ica es una ciudad del centro sur del Perú, capital del departamento de Ica, situada en el estrecho valle que forma el río Ica, entre el Gran Tablazo de Ica y las laderas occidentales de la Cordillera de los Andes
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
                                    <li>Viñedo de Tacama</li>
                                    <li>Huacachina</li>
                                    <li>El Catador</li>
                                    <li>Museo Regional de Ica "Adolfo Bermúdez"</li>
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

export default (Cajamarca);