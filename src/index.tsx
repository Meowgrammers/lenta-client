import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global-styles.css'
import App from './app/app'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
