import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global-styles.css'
import { SwitchComponent } from '@/components'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <SwitchComponent />
  </StrictMode>
)
