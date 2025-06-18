// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Clima from './pages/Cilma/Clima'; // Corrigido de "Cilma"
import Perfil from './pages/Perfil/perfil';
import EditarPerfil from './pages/Perfil/Perfil-edicao';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    // Adiciona basename para funcionar bem no GitHub Pages
    <BrowserRouter basename="/Waves-of-Technology">
      <AuthProvider>
        <Navbar />
        <main className="pagina">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/clima" element={<Clima />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfil-edicao" element={<EditarPerfil />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;