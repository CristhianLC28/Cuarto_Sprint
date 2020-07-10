import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img15 from '../imagenes/img15.jpg';
import us2 from '../imagenes/user2.jpg';
import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';
import Avatar from '@material-ui/core/Avatar';

class Machu_Picchu extends Component {
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
                    <img src={img15} class="card-img" alt="logo" height="350" />
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
                                Machu Picchu es una ciudadela inca ubicada en 
                                las alturas de las montañas de los Andes en Perú, 
                                sobre el valle del río Urubamba. Se construyó en el siglo XV y
                                 luego fue abandonada, y es famosa por sus sofisticadas paredes 
                                 de piedra seca que combinan enormes bloques sin el uso de un mortero,
                                  los edificios fascinantes que se relacionan con las alineaciones astronómicas
                                   y sus vistas panorámicas. El uso exacto que tuvo sigue siendo un misterio.
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
                                La temperatura es cálida y húmeda durante el día y fresca por la noche.
                                 La temperatura oscila entre los 12 y los 24 grados centígrados.
                                  La zona en general es muy lluviosa, especialmente entre noviembre y marzo. 
                                  Las lluvias, que son copiosas, se alternan rápidamente con momentos de intenso
                                   brillo solar.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="container " style={{ margin: 10 }}>
                    <h4>Comentarios</h4>
                    <tr>
                        
                    <td ><Avatar alt="Remy Sharp" src={us2} style={{ margin: 5 }}/></td>
                    <textarea name="comentarios" cols="150" />
                    <input class="btn btn-outline-primary btn-sm" type="submit" value="Enviar"/>
                    </tr>
                </div>


            </React.Fragment>
        );
    }
}

export default (Machu_Picchu);