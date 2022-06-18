import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './config/i18n';
import './config/axios'
import App from './App'
console.info('app start')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
