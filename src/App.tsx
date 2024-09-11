import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
