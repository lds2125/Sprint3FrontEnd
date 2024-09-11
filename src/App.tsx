import { Routes, Route } from 'react-router-dom';
import Cadastro from './components/cadastro';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
