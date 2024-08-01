import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './input.css';

function App() {
  const [resultado, setresultado] = useState('')

  function pedirNumero() {
    let num1 = prompt("Informe o valor 1");
    let num2 = prompt("Informe o valor 2");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
  }

  function somarDoisNumeros() {

    pedirNumero();
    const resultado = num1 + num2;

    setResultado(num1 + num2);

  }

  function diminuirDoisNumeros() {
    pedirNumero();

    const resultado = num1 - num2;

    document.getElementById('spanResultado').innerHTML = resultado;


  }

  function multiplicarDoisNumeros() {
    pedirNumero();

    const resultado = num1 * num2;

    document.getElementById('spanResultado').innerHTML = resultado;


  }

  function dividirDoisNumeros() {
    pedirNumero();

    const resultado = num1 / num2;

    document.getElementById('spanResultado').innerHTML = resultado;

  }

  function descobrirIMC() {
    let altura = prompt("Informe sua altura em metros");
    let peso = prompt("Informe seu peso em kg");
    altura = parseFloat(altura);
    peso = parseFloat(peso);
    let imc = peso / (altura * altura);
    document.getElementById('resultadoIMC').innerHTML = imc;

    if (imc <= 18.5) {
      document.getElementById('resultadoIMC').innerHTML = "Abaixo do peso";
    } else if (imc > 18.5 && imc <= 24.9) {
      document.getElementById('resultadoIMC').innerHTML = "Peso normal";
    } else if (imc > 25 && imc <= 29.9) {
      document.getElementById('resultadoIMC').innerHTML = "Sobrepeso";
    } else if (imc > 30 && imc <= 34.9) {
      document.getElementById('resultadoIMC').innerHTML = "Obesidade grau I";
    } else if (imc > 35 && imc <= 39.9) {
      document.getElementById('resultadoIMC').innerHTML = "Obesidade grau II";
    } else {
      document.getElementById('resultadoIMC').innerHTML = "Obesidade grau III";
    }

  }


  const limparResultado = () => {
    document.getElementById('spanResultado').innerHTML = " ";
    document.getElementById('resultadoIMC').innerHTML = " ";
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <form>

            <div>
              <button onClick={somarDoisNumeros}>+</button>

              <button onClick={diminuirDoisNumeros}>-</button>

              <button onClick={multiplicarDoisNumeros}>X</button>

              <button onClick={dividirDoisNumeros}>/</button>
            </div>

            <div id='divResultado'>
              <h1>O resultado é: <span id='spanResultado'></span> </h1>
            </div>
          </form>

        </div>

        <div className="row">
          <form>
            <div id='imc'>
              <h1>Quer descobrir seu IMC?</h1>
              <button onClick={descobrirIMC}>Clique aqui</button>
              <h3>Seu IMC é: <span id='resultadoIMC'></span></h3>
            </div>

          </form>
        </div>


      </div>


      <button onClick={limparResultado}>Limpar todos os resultados</button>

    </>
  )
}

export default App
