import './index.css'
import './App.css';
import Menu from './components/Menu'
import Container from './components/Container'
import Sobre from './components/Sobre'
import Painel from './components/Painel'
import Feedback from './components/Feedback';
import Rodape from './components/Rodape'

function App() {
  return (
    <div className="App">
     <Menu />
     <Container />
     <Sobre />
     <Painel />
     <Feedback />
     <Rodape />
    </div>
  );
}

export default App;
