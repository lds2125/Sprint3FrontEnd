import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cadastro from './components/cadastro';
import SobreNos from './components/SobreNos';
import Contato from './components/Contato';
import JaSouClientePorto from './components/JaSouCliente';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cliente-porto" element={<JaSouClientePorto />} />
      </Routes>
    </div>
  );
}

export default App;
