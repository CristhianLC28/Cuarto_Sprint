import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';

import logo from '../logo1.jpg';
import Boton from '../settings/Btn_Menu';
import '../user/usu.css';
import img9 from '../imagenes/img9.jpg';
import img18 from '../imagenes/img18.jpg';
import img16 from '../imagenes/img16.jpg';
import img13 from '../imagenes/img13.jpg';
import us1 from '../imagenes/user1.jpg';

class User extends Component {
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
                <div class="container">
                    <div class="fb-profile">
                        <img align="left" class="fb-image-lg" src={img9} alt="logo" height="350" style={{ margin: 10 }} />

                        <img align="left" class="fb-image-profile thumbnail" src={us1} alt="logo" />
                        <div class="fb-profile-text">
                            <h1>Carlos Carbajal</h1>

                        </div>
                    </div>
                </div>`
                `<div align="center">
                    <h5>Lugares Visitados Recientemente</h5>
                </div>
                <CardDeck style={{ margin: 40 }} >
                    <Card border="success">
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                            <Card.Title>Bosque de Piedras</Card.Title>
                            <Card.Text>
                            El Bosque de piedras de Huayllay está ubicado en el distrito de Huayllay, 
                                provincia y departamento de Pasco​.
                                 Está protegido desde 1974 por el establecimiento del Santuario nacional 
                                 de Huayllay. Constituye una maravilla natural andina, a 4,310 metros sobre 
                                 el nivel del mar.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="warning">
                        <Card.Img variant="top" src={img16} />
                        <Card.Body>
                            <Card.Title>Líneas de Nazca</Card.Title>
                            <Card.Text>
                            Las Líneas de Nazca, en el sur de Perú, son un grupo de geoglifos
                                 precolombinos que se extienden en las arenas del desierto. 
                                 Abarcan un área de casi 1,000 kilómetros cuadrados y hay alrededor de 300
                                  figuras distintas, que incluyen animales y plantas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="danger">
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Title>Huacachina</Card.Title>
                            <Card.Text>
                            La laguna de Huacachina es un oasis ubicado a cinco kilómetros al
                                    oeste de la ciudad peruana de Ica, en medio del desierto costero
                                    del Océano Pacífico.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </React.Fragment>
        )
    }
}
export default (User);