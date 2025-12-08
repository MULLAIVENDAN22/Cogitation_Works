import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PracticeComp } from './components/PracticeComp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PracticeComp />
  </StrictMode>,
)

