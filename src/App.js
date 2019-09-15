import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'
import Details from './components/movies/Details'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Index}/>
              <Route path="/movie/details/:id" component={Details}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
