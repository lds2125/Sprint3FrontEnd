import { Route, Routes } from 'react-router-dom';
import ContaUsuario from './Pages/contaUsuario/ContaUsuario';
import Contato from './Pages/contato/Contato';
import JaSouClientePorto from './Pages/jaSouCliente/JaSouCliente';
import SobreNos from './Pages/sobreNos/SobreNos';
import TelaPrincipal from './Pages/telaPrincipal/TelaPrincipal';
import Cadastro from './Pages/cadastro/cadastro';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cliente-porto" element={<JaSouClientePorto />} />
          <Route path="/" element={<TelaPrincipal />} />
          <Route path="/conta-usuario" element={<ContaUsuario />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
