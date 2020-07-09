import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img13 from '../imagenes/img13.jpg';
import us1 from '../imagenes/user1.jpg';
import us2 from '../imagenes/user2.jpg';
import us3 from '../imagenes/user3.jpg';
import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';

import "../comentarios_es/style.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplyIcon from '@material-ui/icons/Reply';

class Huacachina extends Component {
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
                    <img src={img13} class="card-img" alt="logo" height="350" />
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
                                    La laguna de Huacachina es un oasis ubicado a cinco kilómetros al
                                    oeste de la ciudad peruana de Ica, en medio del desierto costero
                                    del Océano Pacífico. De aguas color verde, surgió debido al afloramiento de
                                    corrientes subterráneas y alrededor de ella hay una abundante vegetación
                                    compuesta de palmeras, eucaliptos (especies introducidas)
                                    y la especie de algarrobo conocida como huarango,
                                    la que sirve para el descanso de las aves voladoras que pasan por esta región.
                                    Todo ello contribuye a hacer de Huacachina uno de los lugares más vistosos y
                                    bellos de la costa peruana.
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
                                <th scope="col">Leyenda de Huacachina</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Cuenta la leyenda que hubo una vez una hermosa doncella llamada Huacca China.
                                    Era una bella mujer que era pretendida por los hombres de la ciudad pero que
                                    ella no correspondía. Ella solía bañarse en un sitio alejado junto a un árbol,
                                    era un lugar que nadie conocía. Hasta que un día, al bañarse,
                                    pudo ver en su espejo a un foráneo que la observaba y decidió acercarse.
                                    Asustada, la doncella comenzó a correr hasta que su vestimenta se quedó
                                    enredada en un árbol y se convirtió en dunas; ella seguía corriendo hasta
                                    que volvió a tropezar y su espejo se quebró en pedazos convirtiéndose en
                                    laguna donde ella se sumergió y se quedó transformada en sirena. Todas
                                    las noches sale a llorar su mala fortuna y cuenta la leyenda que en
                                    represalia, salía en las noches a sorprender a los extranjeros,
                                    encandilarnos y ahogarlo en el fondo de la laguna. En la actualidad,
                                    varios extranjeros han fallecido cobrando fuerza la leyenda de la sirena.
                                    Huacca China significa: la mujer que llora.
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

export default (Huacachina);