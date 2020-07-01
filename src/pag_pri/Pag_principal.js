import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../logo1.jpg';
import img1 from '../imagenes/img1.jpg';
import img2 from '../imagenes/img2.jpg';
import img3 from '../imagenes/img3.png';
import Boton from '../settings/Btn_Menu';


class PagPri extends Component {
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
        <div>
          <div align="center"><img src={img1} alt="logo" height="500" width="1300" style={{ padding: 10 }} /></div>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              "Machu Picchu"
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Machu Picchu (en quechua «Montaña vieja») es una de las 7 nuevas maravillas del mundo localizada en Perú,
              en el Departamento del Cuzco, en la provincia de Urubamba.
              Este antiguo poblado andino fue construido en el siglo XV como residencia de descanso y santuario religioso.
            </Typography>
            <div >
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" class="btn btn-outline-success" href="/Info_Cuzco">
                    Conoce más acerca de Machu Picchu
                  </Button>
                </Grid>
                
              </Grid>
            </div>
          </Container>
        </div>
        <div class="row" style={{ padding: 35 }}>
          <div class="col-sm-6">
            <div class="card" >
              <div align="center"><img src={img2} alt="logo" height="190" /></div>
              <div class="card-body">
                <h5 class="card-title" align="center">Perú</h5>
                <p class="card-text">
                  Perú país de Sudamérica que abarca una sección del bosque del Amazonas y Machu Picchu,
                  una antigua ciudad inca en las alturas de los Andes.
                </p>
                <div >
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button class="btn btn-outline-success" href="/Lugares_Populares">
                        Conozca más Lugares
                  </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div align="center"><img src={img3} alt="logo" height="190" /></div>
              <div class="card-body">
                <h5 class="card-title" align="center">Lima</h5>
                <p class="card-text">
                  Son muchas e incontables razones para visitar Lima aquí les daremos algunas de ellas,
                  las que lo atraparan y lo harán desear pagar con gusto esta inolvidable aventura.
                 </p>
                <div >
                  <Grid container spacing={1} justify="center">
                    <Grid item>
                      <Button class="btn btn-outline-success" href="/Info_Lima">
                        Conozca La Capital 
                  </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default (PagPri);