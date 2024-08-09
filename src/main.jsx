import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextMain from './context/ContextMain.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextMain>
    <App />
    </ContextMain>
  </React.StrictMode>,
)
