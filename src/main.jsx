import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './config/i18n';
import './config/axios'
import App from './App'

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  import('./services/mocks').then(({ worker }) => {
    console.info(worker)
    worker.start()
  })
  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
