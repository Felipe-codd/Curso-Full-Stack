import "primereact/resources/themes/lara-light-indigo/theme.css"; // Tema
import "primereact/resources/primereact.min.css";               // Core
import "primeicons/primeicons.css";                             // Ícones
import "primeflex/primeflex.css";                               // Layout (Grid)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
