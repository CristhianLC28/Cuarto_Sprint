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
import us2 from '../imagenes/user2.jpg';
import us3 from '../imagenes/user3.jpg';
import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';

import "../comentarios_es/style.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplyIcon from '@material-ui/icons/Reply';

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
                            <Button color="textPrimary" variant="outlined" href="/Lugares_Populares" style={{ left: -10 }} >
                                Lugares + Populares
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
                                Huacachina es un oasis desértico y una pequeña villa justo al oeste de la ciudad de Ica,
                                en el suroeste de Perú. En su centro están las aguas verdes de la laguna de Huacachina,
                                la cual se cree que tiene propiedades terapéuticas y está rodeada de palmas.
                                Las orillas de la laguna tienen bares y clubes.
                                Los buggies recorren las altas dunas onduladas que rodean la villa.
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
                                    <li>Full Day Paracas</li>
                                    <li>Oasis de la Huacachina</li>
                                    <li>Dunas de la Huacachina</li>
                                    <li>Desierto de Ica</li>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="comments-container">
                <h4 >Comentarios</h4>
                    <ul id="comments-list" class="comments-list">
                        <li>
                            <div class="comment-main-level">
                                <div class="comment-avatar"><img src={us1} /></div>
                                <div class="comment-box">
                                    <div class="comment-head">
                                        <h6 class="comment-name">Luis Castañeda</h6>
                                        <span>hace 20 minutos</span>
                                        <i><ReplyIcon /></i>
                                        <i><FavoriteIcon /></i>
                                    </div>
                                    <div class="comment-content">
                                        Un Lugar espectacular.
						            </div>
                                </div>
                            </div>
                            <ul class="comments-list reply-list">
                                <li>
                                    <div class="comment-avatar"><img src={us3} /></div>
                                    <div class="comment-box">
                                        <div class="comment-head">
                                            <h6 class="comment-name">Lorena Rojas</h6>
                                            <span>hace 10 minutos</span>
                                            <i><ReplyIcon /></i>
                                            <i><FavoriteIcon /></i>
                                        </div>
                                        <div class="comment-content">
                                            Concuerdo con tu respuesta amigo.Ademas,tiene buenos restaurantes alrededor de la plaza principal.
                                            </div>
                                    </div>
                                </li>
                            </ul>

                        </li>

                        <li>
                            <div class="comment-main-level"></div>
                            <div class="comment-avatar"><img src={us2} /></div>
                            <div class="comment-box">
                                <div class="comment-head">
                                    <h6 class="comment-name">Marco Lara</h6>
                                    <span>hace 50 minutos</span>
                                    <i><ReplyIcon /></i>
                                    <i><FavoriteIcon /></i>
                                </div>
                                <div class="comment-content">
                                    Hermoso lugar desearia volver a viajar ahí.
                                    </div>
                            </div>
                        </li>
                    </ul>
                </div>


            </React.Fragment>
        );
    }
}

export default (Cajamarca);