import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Index}/>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
