import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router, Route, Switch } from 'wouter'
import './index.css'
import App from './App.jsx'
import ProviderDetail from './pages/ProviderDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/anbieter/:id" component={ProviderDetail} />
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
)
