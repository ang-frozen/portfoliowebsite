import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/baloo-2"
import "@fontsource/poppins"
import "@fontsource/roboto"
import "@fontsource/press-start-2p"
import '@fontsource-variable/jaro'
import '@fontsource-variable/sixtyfour'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
