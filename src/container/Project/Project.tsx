import React, { useEffect, useState } from 'react';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import { Modal } from '../../components/Modal/Modal';
import './Project.scss'
import { DialogContent, TextField } from '@material-ui/core';
import DialogContentText from '@material-ui/core/DialogContentText';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { useHistory } from 'react-router-dom';
import { CreateBoardProjectSV } from '../../services/BoardProjectSV';
import { createProjectSV } from '../../services/ProjectSV';

const MAX_PROJECT = 3;

export function Project(): any {
    const [nameBoard, setNameBoard] = useState('');

    const lenThemeProject = (): number => {
        let len = 0;
        FakeDataProj.map((item, i) => len++)
        return len
    }

    return (
        <div className="project--container">
            {lenThemeProject() <= MAX_PROJECT &&
                <div onClick={() => console.log("you click on add Project button")}>
                    <Modal title="+" titleDialog="Create Board Project" type="form" submitForm={() => CreateBoardProjectSV(nameBoard)} >
                        <DialogContent>
                            <DialogContentText>Write Name of your Folder Project. Your max board projects is to 3</DialogContentText>
                            <TextField
                                required
                                label="Name"
                                onChange={(e) => setNameBoard(e.target.value)}
                                fullWidth
                            />
                        </DialogContent>
                    </Modal>
                </div>
            }
            <CreateProjectList />
        </div>
    )
}

function CreateProjectList(): any {
    const [nameProject, setNameProject] = useState('');
    const [mobile, setMobile] = useState(false);

    const showMobile = () => {
        if (window.innerWidth <= 990)
            setMobile(true)
        else
            setMobile(false)
    }

    useEffect(() => {
        showMobile()
    }, []);

    window.addEventListener('resize', showMobile);

    const history = useHistory();

    const onClickBoxProject = (title:  string) => {
        history.push(`/project/board/${title}`);
    }

    return (
        <>
                {FakeDataProj.map((item, i: number) => {
                    return (
                        <TaskBoard
                            title={item.theme}
                            taskSize={mobile ? "task--mobile" : "task--small"}
                        >
                        <div className="project--modal">
                            <Modal title="+" titleDialog="Create Board Project" type="form" submitForm={() => createProjectSV(nameProject, item.theme)}>
                                <DialogContent>
                                    <DialogContentText>Write Name of your Board Project. Your max board projects is to 3</DialogContentText>
                                    <TextField
                                        required
                                        label="Name"
                                        onChange={(e) => setNameProject(e.target.value)}
                                        fullWidth
                                    />
                                </DialogContent>
                            </Modal>
                        </div>
                            <div>
                            {item.projects.map((item: any, i: number) => {
                                return (
                                    <div className="project--content">
                                        <BoxProject title={item.name} boxProjectSize="boxPr--task--md" onClick={() => {
                                            onClickBoxProject(item.name)
                                        }} />
                                    </div>
                                )
                            })}
                            </div>
                        </TaskBoard>
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
            },
            
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
