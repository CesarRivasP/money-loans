import React, { Component/*, Fragment*/ } from 'react';
import Form from './components/form';
import Result from './components/result';
import Message from './components/message';
import Spinner from './components/spinner';
import { calculateTotal } from './helpers';
import './normalize.css';
import './skeleton.css';


class App extends Component {
  state = {
    total: '',
    quantity: '',
    term: '',
    loading: false
  }

  dataLoans = (quantity, term) => {
    // console.log('Desde app.js');
    // console.log(`${quantity} ${term}`);
    const total = calculateTotal(quantity, term);

    this.setState({
      loading: true
      }, 
      () => { //calback, esta funcion se ejecutara despues de que el state haya cambiado
        setTimeout(() => {
          this.setState({
            total,
            quantity,
            term,
            loading: false
          })
        }, 3000);
    })
  }

  renderResult = (quantity, term, total, loading) => {
    const RenderOption = loading === true ? Spinner : Message;
    return (
      !total || loading === true ? 
        <RenderOption /> 
        :  
        <Result quantity={quantity} term={term} total={total} />
    )
  }

  render() {

    const { quantity, term, total, loading } = this.state;

    return (
      <div>
        <h1>Cotizador de prestamos</h1>
        <div className="container"> 
          <Form dataLoans={this.dataLoans} />
          <div className="messages">
            {
              this.renderResult(quantity, term, total, loading)
            }
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