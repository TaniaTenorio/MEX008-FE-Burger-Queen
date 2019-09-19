import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Imput } from 'reacttrap';

/*import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase';*/


//comienza diseño con bootstrap
import { GoogleLoginButton } from 'react-social-login-buttons';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
      <Form className="App">
        <h1>
          <span className="font-weight-blod">Pan D'Monium</span>
        </h1>
        <h2 className="text-center">Bienvenido</h2>
        <FormGroup>
          <Label>Nuemro Celular</Label>
          <Imput type="number" placeholder="Ingresa tu nuero de telefono"></Imput>
        </FormGroup>
        <Button className="btn-lg btn-warning btn-block">Login</Button>
          <div className="text-center pt-3">
             O logeate con tus redes 
          </div>
        <div>
          <GoogleLoginButton className="mt-3 mb-3"/>
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
      </Form>
  );
}
export default App;




