import React from 'react';
import './Credits'
import './SampleEmail'
import Home from './pages/Home';
import Start from './pages/Start';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

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
          <Route path="/privacy-policy" component={PrivacyPolicy}>
          </Route>
          <Route path="/terms-service" component={TermsOfService}>
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
