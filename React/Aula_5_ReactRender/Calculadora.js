import React, { useState } from 'react';

const CalculadoraSimples = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(null);

 // Função para lidar com a alteração do valor de entrada
/*  const manipulaMudanca = (event) => {
    setValor1(event.target.value);
  }; */

  const calcularSoma = () => {
    const soma = parseInt(valor1) + parseInt(valor2);
    setResultado(soma);
  };

  const calcularSub = () => {
    const subtracao = parseInt(valor1) - parseInt(valor2);
    setResultado(subtracao);
  };

  const calcularMulti = () => {
    const multiplicacao = parseInt(valor1) * parseInt(valor2);
    setResultado(multiplicacao);
  };

  const calcularDiv = () => {
    const divisao = parseInt(valor1) / parseInt(valor2);
    setResultado(divisao);
  };

  const calcularPotencia = () => {
    const potencia = Math.pow(parseInt(valor1), parseInt(valor2));
    setResultado(potencia);
  };

  return (
    <div>
      <label>
        Valor 1:
        <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} />
      </label>
      <br />
      <label>
        Valor 2:
        <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} />
      </label>
      <br />
      <button onClick={calcularSoma}>Soma</button>
      <br />
      <button onClick={calcularSub}>Subtracão</button>
      <br />
      <button onClick={calcularMulti}>Multiplicacão</button>
      <br />
      <button onClick={calcularDiv}>Divisão</button>
      <br />
      <button onClick={calcularPotencia}>Potenciação</button>
      <br />

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default CalculadoraSimples;
