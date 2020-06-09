import React from 'react';
import './Credits'
import './SampleEmail'
import Home from './pages/Home';
import Start from './pages/Start';
import ThankYou from './pages/ThankYou'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/start" component={Start}>
          </Route>
          <Route path="/thanks" component={ThankYou}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
