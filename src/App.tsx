import { Route, Routes } from 'react-router-dom';
import ContaUsuario from './components/ContaUsuario';
import Contato from './components/Contato';
import JaSouClientePorto from './components/JaSouCliente';
import SobreNos from './components/SobreNos';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal';
import Cadastro from './components/cadastro/cadastro';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cliente-porto" element={<JaSouClientePorto />} />
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/conta-usuario" element={<ContaUsuario />} />
      </Routes>
    </div>
  );
}

export default App;