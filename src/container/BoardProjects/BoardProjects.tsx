import React, { useEffect, useState } from 'react';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import { Task } from '../../components/Task/Task';
import { Modal } from '../../components/Modal/Modal';

import './BoardProjects.scss';
import { DialogContent, DialogContentText, TextField } from '@material-ui/core';

interface IBoardProjects {
    title?: string;
    onClick?: any;
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
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => {
                            alert("form submit")
                        }}>
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
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => {
                            alert("form submit")
                        }}>
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
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => {
                            alert("form submit")
                        }}>
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
            {FakeDataToDo.map((item, i) => {
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

const FakeDataToDo = [
    {
        name: "#1 deleate",
        type: "To Do"
    },
    {
        name: "#2 create dialog",
        type:"To Do"
    },
    {
        name: "#3 create dialog compo",
        type: "Done"
    },
    {
        name: "#5 manage link",
        type: "To Do"
    },
    {
        name: "#6 create task ",
        type:"In Progress"
    },
    {
        name: "#3 create dialog compo",
        type: "Done"
    },
    {
        name: "#1 deleate",
        type: "To Do"
    },
    {
        name: "#2 create dialog",
        type:"To Do"
    },
    {
        name: "#3 create dialog compo",
        type: "Done"
    }
]
