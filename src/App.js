import React from 'react';
import { Provider } from 'react-redux';
import Index from './pages/home';
import './styles/style.css'
import store from './pages/store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrendingPage from './pages/trendingPage/trendingPage.tsx';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Index />
            </Route>
            <Route path='/trending'>
              <TrendingPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
