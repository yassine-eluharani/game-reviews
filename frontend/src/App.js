import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//Local import
import Category from './Pages/Category';
import HomePage from './Pages/HomePage';
import ReviewDetails from './Pages/ReviewDetails';
import SiteHeader from './Components/SiteHeader';

//apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Router>
  );
}


export default App;
