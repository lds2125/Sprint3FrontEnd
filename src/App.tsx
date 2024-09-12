import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Cadastro from './components/cadastro/cadastro';
import SobreNos from './components/SobreNos';
import Contato from './components/Contato';
import JaSouClientePorto from './components/JaSouCliente';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'; // Importe o componente TelaPrincipal

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar fora das rotas para que apareça em todas as páginas */}
      <Routes>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cliente-porto" element={<JaSouClientePorto />} />
        <Route path="/" element={<TelaPrincipal />} /> {/* Adicione o componente TelaPrincipal na rota raiz */}
      </Routes>
    </div>
  );
}

export default App;