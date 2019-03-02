import React, { Component, Fragment } from 'react';
import Form from './components/form';
import './normalize.css';
import './skeleton.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Cotizador de prestamos</h1>
        <div className="container"> 
          <Form />
        </div>
      </div>
    );
  }
}

export default App;

//El component Fragment nos permite retornar multiples componentes sin necesidad que esten dentro de un elemento
//padre como un div, pero no va a crear un div que rodee cada uno de esos componentes
/*
<Fragment>
  <Form />
  <Form />
  <Form />
<Fragment />
*/ 