<<<<<<< HEAD
// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Login from './pages/Login/Login';
import Cadastro  from './pages/Cadastro/Cadastro';
import Clima from './pages/Cilma/Clima';
import Perfil from './pages/Perfil/perfil';
import EditarPerfil from './pages/Perfil/Perfil-edicao';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthContext';

function App() {  
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <main className="pagina">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Clima" element={<Clima />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfil-edicao" element={<EditarPerfil />} />
            <Route
              path="/quiz"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
      </AuthProvider>
    </Router>
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 5a616746e2ab16f71d663d28101d3d67e88a271f
  );
}

export default App;
