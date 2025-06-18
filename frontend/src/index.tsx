import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './components/AuthContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// Para medir performance da sua aplicação:
reportWebVitals();