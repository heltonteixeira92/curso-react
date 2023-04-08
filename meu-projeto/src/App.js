import './App.css';
import HelloWord from './components/HelloWorld'

function App() {

  const name = 'Helton'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1> Alterando o JSX</h1>
      <p> olá {newName} </p>
      <p> Multiplicação { 4 * 5 } </p>
      <p> Soma: {sum(4, 4)} </p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWord/>
    </div>
  );
}

export default App;
