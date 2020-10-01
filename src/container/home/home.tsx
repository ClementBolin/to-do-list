import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BoardInfo } from '../../components/BoardInfo/BoardInfo'
import { NavBar } from '../../components/NavBar/navBar'
import "./home.css"

export function Home(props: any): any {
    return (
        <div className="home">
            <Router>
                <NavBar />
                <div className="board-info-home">
                    <BoardInfo data={FakeData} boardSize="board--large" title="Projet Totals" type="project" >je suis un test</BoardInfo>
                    <BoardInfo boardSize="board--long" title="Stat projects">test</BoardInfo>
                </div>
                <Switch>
                    <Route path="/" />
                </Switch>
            </Router>
        </div>
    )
}

const FakeData = [
    {
        projectName: "Gestify",
        totalIssue: 12,
    },
    {
        projectName: "PI",
        totalIssue: 34,
    },
    {
        projectName: "Corewar",
        totalIssue: 56,
    },
    {
        projectName: "RPG",
        totalIssue: 90,
    },
    {
        projectName: "Golang",
        totalIssue: 23,
    },
    {
        projectName: "C",
        totalIssue: 120,
    },
]
