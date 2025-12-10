import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
// import Qrcode from './practice/Qrcode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Qrcode /> */}
  </StrictMode>,
)
