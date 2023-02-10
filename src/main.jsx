import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DolarProvider } from './context/DolarProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<DolarProvider>
		<App />
	</DolarProvider>
  </React.StrictMode>,
)


