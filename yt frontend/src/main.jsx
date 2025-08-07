import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { presistor, store } from './app/store.js'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'


const queryclient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <QueryClientProvider client={queryclient} >
          <PersistGate loading={null} persistor={presistor} >
            <App />
          </PersistGate>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
