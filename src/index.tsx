import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'

import { BrowserRouter } from 'react-router-dom'
import App from 'Container/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </StyledEngineProvider>
    </BrowserRouter>
)
