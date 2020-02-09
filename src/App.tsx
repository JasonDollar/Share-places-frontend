import React from 'react'
import { 
  BrowserRouter as Router, Route, Redirect, Switch, 
} from 'react-router-dom'

import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'

const App: React.FC = () => (
  <Router>
    <MainNavigation />
    <main>

      <Switch>
        <Route path="/" exact>
          <Users />
        </Route> 
        <Route path="/places/new">
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
)
 
export default App
