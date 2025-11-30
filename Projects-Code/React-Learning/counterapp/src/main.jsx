import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './contextapi/ThemeContext.jsx'
import AuthProvider from './contextapi/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
   <AuthProvider>
      <App />
    </AuthProvider> 
  
   </ThemeProvider>
)
