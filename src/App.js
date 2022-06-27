

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';

import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourite';
import NewMeetupPage from './pages/NewMeetup';


function App() {
  return (
    <div>
      
        <Router>
        <MainNavigation />
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route>
          <Route path='/favourites'>
            <FavouritesPage />
          </Route>
        </Switch>
        </Router>
      
      
    </div>
  );
}

export default App;