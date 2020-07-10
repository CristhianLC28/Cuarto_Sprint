import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img11 from '../imagenes/img11.jpg';
import img12 from '../imagenes/img12.png';
import img13 from '../imagenes/img13.jpg';
import img14 from '../imagenes/img14.jpg';
import img15 from '../imagenes/img15.jpg';
import img16 from '../imagenes/img16.jpg';
import img17 from '../imagenes/img17.jpg';

import Boton from '../settings/Btn_Menu';
import Start from '../settings/Starts';
import BarraT from '../settings/Barra_NavT';

class Turistico extends Component {
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
          <img src={img11} class="card-img" alt="logo" height="350"  />
          <div class="card-img-overlay">
          <div align="center" ><BarraT /></div>
          </div>
        </div>

          <div class="card-deck " style={{ margin: 6 }}>
            <div class="card " >
              <img src={img12} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Vinicunca</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Vinicunca">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img13} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Huacachina</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Huacachina">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img14} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Velo de la Novia</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Velo_Novia">Saber más...</Button>
              </div>
            </div>
          </div>

          <div class="card-deck " style={{ margin: 6 }}>
            <div class="card " >
              <img src={img15} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Machu Picchu</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Machu_Picchu">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img16} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Líneas de Nazca</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Lineas_Nazca">Saber más...</Button>
              </div>
            </div>
            <div class="card">
              <img src={img17} class="card-img-top" height="230"/>
              <div class="card-body">
                <Start />
                <h5 class="card-title">Bosque de Piedra de Huayllay</h5>
              </div>
              <div class="card-footer" align="right">
                <Button color="textPrimary" variant="outlined" href="/Bosque_Piedra">Saber más...</Button>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default (Turistico);