import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.jsx'
import {Pokemon} from './componentes/Pokemon.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
