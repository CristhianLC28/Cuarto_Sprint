import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './Login1';
import Registro from './registro';
import PagPri from './pag_pri/Pag_principal';
import Lugares from './lugares/Lugares';
import Info_Lima from './info/Info_Lima';
import Info_Cajamarca from './info/Info_Cajamarca';
import Info_Cuzco from './info/Info_Cuzco';
import Info_Titicaca from './info/Info_Titicaca';
import Info_Nazca from './info/Info_Nazca';
import Info_Huacachina from './info/Info_Huacachina';
import Turistico from './lugares/Turistico';
import Vinicunca from './zonas_tour/Vinicunca';
import Huacachina from './zonas_tour/Huacachina';
import Velo_Novia from './zonas_tour/Velo_Novia';
import Machu_Picchu from './zonas_tour/Machu_Picchu';
import Lineas_Nazca from './zonas_tour/Lineas_Nazca';
import Bosque_Piedra from './zonas_tour/Bosque_Piedra';
import User from './user/Usuario';

function Router() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/Registro" component={Registro} />
            <Route path="/Pag_Principal" component={PagPri} />
            <Route path="/Lugares_Populares" component={Lugares} />
            <Route path="/Info_Lima" component={Info_Lima}/>
            <Route path="/Info_Cajamarca" component={Info_Cajamarca}/>
            <Route path="/Info_Cuzco" component={Info_Cuzco}/>
            <Route path="/Info_Titicaca" component={Info_Titicaca}/>
            <Route path="/Info_Nazca" component={Info_Nazca}/>
            <Route path="/Info_Huacachina" component={Info_Huacachina}/>
            <Route path="/Turistico" component={Turistico}/>
            <Route path="/Vinicunca" component={Vinicunca}/>
            <Route path="/Huacachina" component={Huacachina}/>
            <Route path="/Velo_Novia" component={Velo_Novia}/>
            <Route path="/Machu_Picchu" component={Machu_Picchu}/>
            <Route path="/Lineas_Nazca" component={Lineas_Nazca}/>
            <Route path="/Bosque_Piedra" component={Bosque_Piedra}/>
            <Route path="/User" component={User}/>
        </BrowserRouter>
    );  
}

export default (Router);