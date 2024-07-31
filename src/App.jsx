import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [resultado, setresultado] = useState('')



  function somarDoisNumeros() {
    let num1 = prompt("Informe o valor 1");
    let num2 = prompt("Informe o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const resultado = num1 + num2;

    setresultado(resultado);
    console.log(resultado);

  }

  function diminuirDoisNumeros() {
    let num1 = prompt("Informe o valor 1");
    let num2 = prompt("Informe o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const resultado = num1 - num2;

    setresultado(resultado);
    console.log(resultado);

  }

  function multiplicarDoisNumeros() {
    let num1 = prompt("Informe o valor 1");
    let num2 = prompt("Informe o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const resultado = num1 * num2;

    setresultado(resultado);
    console.log(resultado);

  }

  function dividirDoisNumeros() {
    let num1 = prompt("Informe o valor 1");
    let num2 = prompt("Informe o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const resultado = num1 / num2;

    setresultado(resultado);
    console.log(resultado);

  }

  const limparResultado = () => {
    setresultado(null);

  }



  return (
    <>
      <div>
        <button onClick={somarDoisNumeros}>+</button>

        <button onClick={diminuirDoisNumeros}>-</button>

        <button onClick={multiplicarDoisNumeros}>X</button>

        <button onClick={dividirDoisNumeros}>/</button>
      </div>
      <div>
        <h1>O resultado é: {resultado}</h1>
      </div>
      <button onClick={limparResultado}>Limpar</button>
    </>
  )
}

export default App
