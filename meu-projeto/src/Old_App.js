import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

const name = 'Maria'
function App() {
  return (
    <div className="App">
      <Frase/>
      <h1>Testando CSS</h1>
      <SayMyName nome='Teixeira'/>
      <SayMyName nome={name}/>
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissão="Programador" 
        foto="https://via.placeholder.com"
        />
        <List></List>
    </div>
  );
}

export default App;
