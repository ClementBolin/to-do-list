import React from 'react';
import { Home } from './container/home/home';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/navBar';
import { Project } from './container/Project/Project';
import { Mail } from './container/Mail/Mail';
import { Contact } from './container/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/project' component={Project} />
          <Route path='/mail' component={Mail} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
