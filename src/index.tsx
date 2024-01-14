import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import App from 'Container/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <CssBaseline>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </CssBaseline>
        </StyledEngineProvider>
    </BrowserRouter>
)
