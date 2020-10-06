import React from 'react';
import { Button } from '../../components/button/Button';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import './Project.scss'

const MAX_PROJECT = 3;

export function Project(): any {

    const lenThemeProject = (): number => {
        let len = 0;
        FakeDataProj.map((item, i) => len++)
        return len
    }

    return (
        <div className="project--container">
            <CreateProjectList />
            {lenThemeProject() <= MAX_PROJECT && 
                <Button buttonSize="btn--large" buttonStyle="btn--more" >+</Button>
            }
        </div>
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
