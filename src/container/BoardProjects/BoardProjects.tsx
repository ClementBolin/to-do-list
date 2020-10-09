import React from 'react';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import { Task } from '../../components/Task/Task';
import './BoardProjects.scss';

interface IBoardProjects {
    title?: string;
    onClick?: any;
}

export function BoardProjects({
    title,
    onClick
}: IBoardProjects): any {

    return (
        <>
            <div className="Board--title">
                <BoxProject title={title} boxProjectStyle="boxPr--title" boxProjectSize="boxPr--small" boxProjectColor="boxPr--title-color" />
            </div>
            <div className="Board--to-do">
                <TaskBoard title="To Do" content={<ContentBoard type="To Do" />} />
                <TaskBoard title="In Progress" content={<ContentBoard type="In Progress" />} />
                <TaskBoard title="Done" content={<ContentBoard type="Done" />} />
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
