import React from 'react'
import { BoardInfo } from '../../components/BoardInfo/BoardInfo'
import "./home.css"

export function Home(props: any): any {
    return (
        <div className="home">
                <div className="board-info-home">
                    <BoardInfo data={FakeData} boardSize="board--large" title="Projet Totals" type="project" >je suis un test</BoardInfo>
                    <BoardInfo boardSize="board--large" title="Stat projects">test</BoardInfo>
                </div>
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
        projectName: "Lisa",
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
    {
        projectName: "C",
        totalIssue: 120,
    },    {
        projectName: "C",
        totalIssue: 120,
    },    {
        projectName: "C",
        totalIssue: 120,
    },
]
