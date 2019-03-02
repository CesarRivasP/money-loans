import React,{ Component } from 'react';

class Form extends Component {
    state = { //el state siempre es un objeto
      cantidad: '',
      plazo: ''
    }

    updateState = () => {

    }
    
    render() {
        return (
            <form>
              <div>
                <label>Cantidad Prestamo:</label>
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
                  placeholder="Ejemplo: 3000" >
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