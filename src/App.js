import React, { Component, Fragment } from 'react';
import Form from './components/form';
import Result from './components/result';
import { calculateTotal } from './helpers';
import './normalize.css';
import './skeleton.css';


class App extends Component {
  state = {
    total: '',
    quantity: '',
    term: ''
  }

  dataLoans = (quantity, term) => {
    // console.log('Desde app.js');
    // console.log(`${quantity} ${term}`);
    const total = calculateTotal(quantity, term);

    this.setState({
      total,
      quantity,
      term
    })
  }

  render() {
    const { quantity, term, total } = this.state;
    return (
      <div>
        <h1>Cotizador de prestamos</h1>
        <div className="container"> 
          <Form dataLoans={this.dataLoans} />
          <div className="messages">
            <Result quantity={quantity} term={term} total={total} />
          </div>
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