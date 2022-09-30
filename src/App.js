import {Switch, Redirect, Route} from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
