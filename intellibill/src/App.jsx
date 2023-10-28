import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path= "/">
            <Login />
          </Route>
          <Route path= "/home">
            <Home />
          </Route>
          {/* Catch-all route for /login */}
          <Route path="/*">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App 