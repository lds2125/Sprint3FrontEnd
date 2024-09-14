import { Route, Routes } from 'react-router-dom';
import ContaUsuario from './Pages/ContaUsuario/ContaUsuario';
import Contato from './Pages/Contato/Contato';
import JaSouClientePorto from './Pages/JaSouCliente/JaSouCliente';
import SobreNos from './Pages/SobreNos/SobreNos';
import TelaPrincipal from './Pages/TelaPrincipal/TelaPrincipal';
import Cadastro from './Pages/cadastro/cadastro';
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