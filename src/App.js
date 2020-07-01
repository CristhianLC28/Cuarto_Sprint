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
        </BrowserRouter>
    );  
}

export default (Router);