import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img4 from '../imagenes/img4.jpg';
import img7 from '../imagenes/img7.jpg';
import img5 from '../imagenes/img5.jpg';
import img6 from '../imagenes/img6.jpg';
import img8 from '../imagenes/img8.jpg';
import img9 from '../imagenes/img9.jpg';
import img10 from '../imagenes/img10.jpg';

import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';
import Barra from '../settings/Barra_Nav';

class Lug extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default" >
          <Toolbar >
            <Button href="/Pag_Principal"><img src={logo} alt="logo" height="65" /></Button>
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
          <img src={img4} class="card-img" alt="logo" height="350"  />
          <div class="card-img-overlay">
          <div align="center" ><Barra /></div>
          </div>
        </div>

          <div class="card-deck " style={{ margin: 6 }}>
            <div class="card " >
              <img src={img5} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Lima</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Info_Lima">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img6} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Cajamarca</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Info_Cajamarca">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img7} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Cuzco</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Info_Cuzco">Saber más...</Button>
              </div>
            </div>
          </div>

          <div class="card-deck " style={{ margin: 6 }}>
            <div class="card " >
              <img src={img8} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Lago Titicaca</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Info_Titicaca">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img9} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Lineas de Nazca</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="Info_Nazca">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img10} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Huacachina</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Info_Huacachina">Saber más...</Button>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default (Lug);