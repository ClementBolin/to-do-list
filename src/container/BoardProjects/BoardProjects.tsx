import React, { useEffect, useState } from 'react';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import { Task } from '../../components/Task/Task';
import { Modal } from '../../components/Modal/Modal';

import './BoardProjects.scss';
import { DialogContent, DialogContentText, TextField } from '@material-ui/core';
import { createTaskSV, getTaskSV } from '../../services/TaskSV';
import { ITask } from '../../services/models/services.models';

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
    const [listTask, setListTask] = useState<ITask[]>([]);

    useEffect(() => {
        getTaskSV()
            .then((data) => setListTask(data));
    }, [])

    const showMobile = () => {
        if (window.innerWidth <= 990)
            setMobile(true)
        else
            setMobile(false)
    }

    const lengthTask = (): string => {
        let len = 0;
        for (let i = 0; i !== listTask.length; i++) {
            if (listTask[i].tag === title)
                len++
        }
        len++
        return String(len)
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
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => createTaskSV("#" + lengthTask() + " " + nameTask, title, getActualDate(), "To Do")}>
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
                    <ContentBoard type="To Do" listTask={listTask} prName={title}/>
                </TaskBoard>
                <TaskBoard title="In Progress" taskSize={mobile ? "task--mobile" : "task--medium"} >
                    <div className="project--modal">
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => createTaskSV("#" + lengthTask() + " " + nameTask, title, getActualDate(), "In Progress")}>
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
                    <ContentBoard type="In Progress" listTask={listTask} prName={title}/>
                </TaskBoard>
                <TaskBoard title="Done" taskSize={mobile ? "task--mobile" : "task--medium"}>
                    <div className="project--modal">
                        <Modal title="+" titleDialog="Create Task Project" type="form" submitForm={() => createTaskSV("#" + lengthTask() + " " + nameTask, title, getActualDate(), "Done")}>
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
                    <ContentBoard type="Done" listTask={listTask} prName={title} />
                </TaskBoard>
            </div>
        </>
    )
}

interface IContentBoardTask {
    type: string;
    listTask: ITask[];
    prName: string;
}

const TYPE = ["To Do", "In Progress", "Done"];

const ContentBoard = ({
    type,
    listTask,
    prName
}: IContentBoardTask) => {
    const checkType = TYPE.includes(type) ? type : "error";

    return (
        <div>
            {listTask.map((item: ITask, i: number) => {
                if (item.type === checkType && item.tag === prName) {
                    return (
                        <div style={{display: "flex", justifyContent:"center", marginBottom: "2%"}}>
                            <Task title={item.name} deleate taskInfo={item} />
                        </div>
                    )
                }
                return null;
            })}
        </div>
    )
}
