import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Local import
import Category from './Pages/Category';
import HomePage from './Pages/HomePage';
import ReviewDetails from './Pages/ReviewDetails';
import SiteHeader from './Components/SiteHeader';

function App() {
  return (
    <Router>
    <div className="App">
    <SiteHeader />
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/details/:id">
        <ReviewDetails />
      </Route>

      <Route path="/category/:id">
        <Category />
      </Route>
    </Switch>

      
    </div>
    </Router>
  );
}


export default App;
