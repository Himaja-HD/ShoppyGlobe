import { StrictMode } from 'react' // Mode
import { createRoot } from 'react-dom/client' // Root
import './index.css' // Styles
import App from './App.jsx' // App

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Strict */}
    <App /> {/* Render */}
  </StrictMode>,
)
