import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Patata} from 'react-router-dom'
// con el "as" le podemos cambiar el nombre al componente luego de importarlo

ReactDOM.createRoot(document.getElementById('root')).render(
  <Patata>
    <App />
  </Patata>
)