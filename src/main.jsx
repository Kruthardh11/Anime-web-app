import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalCntextProvider } from './components/context/global.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <GlobalCntextProvider>
    <App />
    </GlobalCntextProvider>
  </React.StrictMode>,
)
