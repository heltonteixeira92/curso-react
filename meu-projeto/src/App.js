import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';

const name = 'Maria'
function App() {
  return (
    <div className="App">
      <SayMyName nome='Teixeira'/>
      <SayMyName nome={name}/>
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissão="Programador" 
        foto="https://via.placeholder.com"
        />
    </div>
  );
}

export default App;
