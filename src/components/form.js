import React,{ Component } from 'react';

class Form extends Component {
    state = { //el state siempre es un objeto
      cantidad: '',
      plazo: ''
    }

    updateState = (e) => {
      //e.target nos pasa sobre que elemento se esta escribiendo
      // console.log(e.target.value);
      //console.log(this.state);
      // this.state.cantidad = e.target.value NO ES RECOMENDABLE
      
     // this.setState({ 
       // cantidad: e.target.value 
      //})

      const { name, value } = e.target;

      this.setState({
        [name]: Number(value)
      })
    }

    render() {
      const { cantidad } = this.state;
      return (
          <form>
            <div>
              <label>Cantidad Prestamo: {cantidad}</label>
              <input 
                className="u-full-width"
                type="number" 
                name="cantidad" 
                placeholder="Ejemplo: 3000"
                onChange={this.updateState}
              />
            </div>  
            <div>
              <label>Plazo para pagar</label>
              <select 
                className="u-full-width" 
                name="plazo" 
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
              <input className="u-full-width button-primary" type="submit" value="calculate" />
            </div>
          </form>
      );
  }
}

export default Form;