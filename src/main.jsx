import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './GlobalStyles'
import { BrowserRouter  } from 'react-router-dom'
import Router from './routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    <GlobalStyle/>
  </StrictMode>,
)
