import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/navBar';
import { Project } from './container/Project/Project';
import { BoardProjects } from './container/BoardProjects/BoardProjects';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Project} />
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
