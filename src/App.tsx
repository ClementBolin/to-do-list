import React from 'react';
import { Home } from './container/home/home';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/navBar';
import { Project } from './container/Project/Project';
import { Mail } from './container/Mail/Mail';
import { Contact } from './container/Contact/Contact';
import { BoardProjects } from './container/BoardProjects/BoardProjects';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/project' component={Project} />
          <Route exact path='/mail' component={Mail} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/project/board/:name' render={(props: any) => {
            return (
              <BoardProjects title={props.match.params.name} onClick={() => console.log(props)} />
            )
          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
