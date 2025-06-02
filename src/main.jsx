import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoadingContextProvider } from './contexts/LoadingContext'
import App from './App.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <LoadingContextProvider>
        <App />
    </LoadingContextProvider>
  </StrictMode>,
)
