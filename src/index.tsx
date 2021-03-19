import { FunctionalComponent, h } from 'preact'
import Redirect from './components/Redirect'
import { Router } from 'preact-router'
import Welcome from './routes/Welcome'

const App: FunctionalComponent = () => {
  return (
    <Router>
      <Welcome path="/" />
      <Redirect path="/:path*" to="/" />
    </Router>
  )
}

export default App
