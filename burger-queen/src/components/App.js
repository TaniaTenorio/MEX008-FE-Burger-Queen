import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Login from './login';//para logearse con firebase

import Layout from '../views/Layout'; // para el siseño de nuestra pagina
import Areas from '../views/Areas';
//import Home from '../Home'; //para la pagina principal


function App() {
  return (
    
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/Areas" component={Areas} />
        </Layout>
      </Switch>
    </BrowserRouter>
    // <div>
    //   <Button text = 'Servicio'/>
    // <Button text = 'Cocina'/>
    //</div>


  );
}
export default App;
