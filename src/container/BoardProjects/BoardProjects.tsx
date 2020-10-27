import React, { useEffect, useState } from 'react';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import { Task } from '../../components/Task/Task';
import { Modal } from '../../components/Modal/Modal';

import './BoardProjects.scss';
import { DialogContent, DialogContentText, TextField } from '@material-ui/core';
import { createTaskSV } from '../../services/TaskSV';

interface IBoardProjects {
    title: string;
    onClick?: any;
}

function getActualDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yy = String(today.getFullYear());

    return dd + "/" + mm + "/" + yy;
}

export function BoardProjects({
    title,
    onClick
}: IBoardProjects): any {
    const [nameTask, setNameTask] = useState('');
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

    return (
        <>
            <div className="Board--title">
                <BoxProject title={title} boxProjectStyle="boxPr--title" boxProjectSize="boxPr--small" boxProjectColor="boxPr--title-color" />
            </div>
            <div className="Board--to-do">
                <TaskBoard title="To Do" taskSize={mobile ? "task--mobile" : "task--medium"} >
                    <div className="project--modal">
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => createTaskSV(nameTask, title, getActualDate(), "To Do", 0)}>
                            <DialogContent>
                                <DialogContentText>Create Your Task Project</DialogContentText>
                                <TextField
                                    required
                                    label="Name"
                                    onChange={(e) => setNameTask(e.target.value)}
                                    fullWidth
                                />
                            </DialogContent>
                        </Modal>
                    </div>
                    <ContentBoard type="To Do" />
                </TaskBoard>
                <TaskBoard title="In Progress" taskSize={mobile ? "task--mobile" : "task--medium"} >
                    <div className="project--modal">
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => createTaskSV(nameTask, title, getActualDate(), "In Progress", 0)}>
                            <DialogContent>
                                <DialogContentText>Create Your Task Project</DialogContentText>
                                <TextField
                                    required
                                    label="Name"
                                    onChange={(e) => setNameTask(e.target.value)}
                                    fullWidth
                                />
                            </DialogContent>
                        </Modal>
                    </div>
                    <ContentBoard type="In Progress" />
                </TaskBoard>
                <TaskBoard title="Done" taskSize={mobile ? "task--mobile" : "task--medium"}>
                    <div className="project--modal">
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => createTaskSV(nameTask, title, getActualDate(), "Done", 0)}>
                            <DialogContent>
                                <DialogContentText>Create Your Task Project</DialogContentText>
                                <TextField
                                    required
                                    label="Name"
                                    onChange={(e) => setNameTask(e.target.value)}
                                    fullWidth
                                />
                            </DialogContent>
                        </Modal>
                    </div>
                    <ContentBoard type="Done" />
                </TaskBoard>
            </div>
        </>
    )
}

interface IContentBoardTask {
    type: string;
}

const TYPE = ["To Do", "In Progress", "Done"];

const ContentBoard = ({
    type
}: IContentBoardTask) => {
    const checkType = TYPE.includes(type) ? type : "error";

    return (
        <div>
            {FakeDataToDo.map((item: any, i: number) => {
                if (item.type === checkType) {
                    return (
                        <div style={{display: "flex", justifyContent:"center", marginBottom: "2%"}}>
                            <Task title={item.name} />
                        </div>
                    )
                }
                return null;
            })}
        </div>
    )
}

const FakeDataToDo: any = [
    // {
    //     name: "#1 deleate",
    //     type: "To Do"
    // },
    // {
    //     name: "#2 create dialog",
    //     type:"To Do"
    // },
    // {
    //     name: "#3 create dialog compo",
    //     type: "Done"
    // },
    // {
    //     name: "#5 manage link",
    //     type: "To Do"
    // },
    // {
    //     name: "#6 create task ",
    //     type:"In Progress"
    // },
    // {
    //     name: "#3 create dialog compo",
    //     type: "Done"
    // },
    // {
    //     name: "#1 deleate",
    //     type: "To Do"
    // },
    // {
    //     name: "#2 create dialog",
    //     type:"To Do"
    // },
    // {
    //     name: "#3 create dialog compo",
    //     type: "Done"
    // }
]
