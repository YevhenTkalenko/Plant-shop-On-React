import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import App from 'Container/App'
import { Provider } from 'react-redux'
import { store } from 'Container/Global/Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <CssBaseline>
                <React.StrictMode>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </React.StrictMode>
            </CssBaseline>
        </StyledEngineProvider>
    </BrowserRouter>
)
