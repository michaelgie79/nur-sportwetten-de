import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router, Route, Switch } from 'wouter'
import './index.css'
import App from './App.jsx'
import ProviderDetail from './pages/ProviderDetail.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/anbieter/:id" component={ProviderDetail} />
        <Route path="/artikel/:id" component={ArticleDetail} />
        <Route path="/tipps/:id" component={ArticleDetail} />
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
)
