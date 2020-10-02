import React from 'react';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import './Project.scss'

export function Project(): any {
    return (
        <div className="project--container">
            <TaskBoard title="CPE" taskSize="task--small" />
        </div>
    )
}

const FakeDataProj = [
    {
        theme: "CPE",
        projects: [
            {
                name: "Corewar",
            },
            {
                name: "test",
            },
            {
                name: "Dante",
            }
        ]
    },
    {
        theme: "PI",
        projects: [
            {
                name: "Gestion",
            },
            {
                name: "Transaction",
            },
            {
                name: "Droits",
            }
        ]
    },
]
