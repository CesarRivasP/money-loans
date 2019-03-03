import React from 'react'

const Result = (props) => {
  const { quantity, term, total } = props;
  return (
    <div className="u-full-width result">
      <h2>Resultados</h2>
      <p>La cantidad solicitada fue ${quantity}</p>
      <p>A pagar en: {term} meses</p>
      <p>Total a pagar: ${total}</p>
      <p>Su pago mensual es de: ${ (total / term).toFixed(2) }</p>
    </div>
  );
}

export default Result;