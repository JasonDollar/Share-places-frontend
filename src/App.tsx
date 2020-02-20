import React from 'react'
import { 
  BrowserRouter as Router, Route, Redirect, Switch, 
} from 'react-router-dom'

import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'
import Auth from './user/pages/Auth'
import NewPlaces from './places/pages/NewPlaces'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'

const App: React.FC = () => (
  <Router>
    <MainNavigation />
    <main>

      <Switch>
        <Route path="/" exact>
          <Users />
        </Route> 
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new">
          <NewPlaces />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
)
 
export default App
