import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/navBar'

export function Home(props: any): any {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" />
                </Switch>
            </Router>
        </div>
    )
}