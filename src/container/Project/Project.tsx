import React from 'react';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import './Project.scss'

export function Project(): any {
    return (
        <div className="project--container">
            <CreateProjectList />
        </div>
    )
}

function Test(): any {
    return (
        <p>Hello</p>
    )
}

function CreateProjectList(): any {
    return (
        <>
            {FakeDataProj.map((item, i: number) => {
                return (
                    <TaskBoard
                        title={item.theme}
                        taskSize="task--small"
                        type="task--list"
                        data={item}
                    />
                )
            })}
        </>
    )
}

const FakeDataProj = [
    {
        theme: "CPE",
        projects: [
            {
                name: "Corewar",
                path: 'CPE/Corewar',
            },
            {
                name: "test",
                path: 'CPE/test',
            },
            {
                name: "Dante",
                path: 'CPE/Dante',
            }
        ]
    },
    {
        theme: "PI",
        projects: [
            {
                name: "Gestion",
                path: 'PI/Gestion',
            },
            {
                name: "Transaction",
                path: 'PI/Transaction',
            },
            {
                name: "Droits",
                path: 'PI/Droits',
            }
        ]
    },

]
