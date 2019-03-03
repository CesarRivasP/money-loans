import React,{ Component } from 'react';

class Form extends Component {
    state = { //el state siempre es un objeto
      quantity: '',
      term: ''
    }

    updateState = (e) => {
      //e.target nos pasa sobre que elemento se esta escribiendo
      // console.log(e.target.value);
      //console.log(this.state);
      // this.state.quantity = e.target.value NO ES RECOMENDABLE
      
     // this.setState({ 
       // quantity: e.target.value 
      //})

      const { name, value } = e.target;

      this.setState({
        [name]: Number(value)
      })
    }

    enableSubmit = () => {
      const { quantity, term } =  this.state;

      const notValid = !quantity || !term; // si no hay quantity o no hay term

     //  console.log(notValid); //si es true, esta desabilitado
      return notValid;
    }

    calculateLoan = (e) => {
      e.preventDefault();
      console.log(`Enviando form`);
      const { quantity, term } = this.state;

      this.props.dataLoans(quantity, term);
      
    }

    render() {
      const { quantity } = this.state;
      return (
          <form onSubmit={this.calculateLoan}>
            <div>
              <label>Cantidad del Prestamo: {quantity}</label>
              <input 
                className="u-full-width"
                type="number" 
                name="quantity" 
                placeholder="Ejemplo: 3000"
                onChange={this.updateState}
              />
            </div>  
            <div>
              <label>Plazo para pagar</label>
              <select 
                className="u-full-width" 
                name="term" 
                placeholder="Ejemplo: 3000" 
                onChange={this.updateState} >
                  <option value="">Seleccionar</option>
                  <option value="3">3 meses</option>
                  <option value="6">6 meses</option>
                  <option value="12">12 meses</option>
                  <option value="24">24 meses</option>
                  <option value="36">36 meses</option>
              </select>
            </div> 
            <div>
              <input 
                disabled={this.enableSubmit()}  //Esta funcion se va a estar ejecutando todo el tiempo, escuchando variaciones en el state
                className="u-full-width button-primary" 
                type="submit" 
                value="calculate" />
            </div>
          </form>
      );
  }
}

export default Form;