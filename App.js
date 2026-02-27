import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserInterface from './UserInterface'; // Assuming this is the user interface component
import AdminInterface from './AdminInterface'; // Assuming this is the admin interface component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminInterface} />
        <Route path="/" component={UserInterface} />
      </Switch>
    </Router>
  );
}

export default App;