import { Route, Routes } from 'react-router-dom';
import Contato from './components/Contato';
import JaSouClientePorto from './components/JaSouCliente';
import SobreNos from './components/SobreNos';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'; // Importe o componente TelaPrincipal
import Cadastro from './components/cadastro/cadastro';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar fora das rotas para que apareça em todas as páginas */}
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cliente-porto" element={<JaSouClientePorto />} />
        <Route path="/" element={<TelaPrincipal />} /> {/* Adicione o componente TelaPrincipal na rota raiz */}
      </Routes>
    </div>
  );
}

export default App;