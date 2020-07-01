import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';

import logo from './logo1.jpg';
import './App.css';
//import Login from './login';


class App extends Component{
  render(){
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <div>        
        <div align="center"><img src={logo} alt="logo" height="225" style={{ padding: 10 }}/></div>
          <form  noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar"
            />
            <div>
              <a href="/Pag_Principal" class="btn btn-primary btn-lg btn-block" type="button" >Iniciar Sesión</a>
              <a href="/Registro" class="btn btn-primary btn-lg btn-block" type="button" >Registrarse</a>
              
            </div> 
          </form>           
        </div>
      </Container>
    );

  }
}
 
export default (App);
