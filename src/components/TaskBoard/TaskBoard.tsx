import React from 'react';
import './TaskBoard.scss';

const STYLE = ["task--primary"];
const SIZE = ["task--medium", 'task--small'];
const COLOR = ["task--color-primary", "task--color-blue", "task--color-green", "task--color-outline"];

interface IPropsTask {
    children?: string;
    taskStyle?: string;
    taskColor?: string;
    taskSize?: string;
    title: string;
}

export const TaskBoard = ({
    children,
    taskStyle,
    taskColor,
    taskSize,
    title
}: IPropsTask) => {
    taskStyle = taskStyle === undefined ? "task--primary" : taskStyle;
    taskColor = taskColor === undefined ? "task--medium" : taskColor;
    taskSize = taskSize === undefined ? "task--color-primary" : taskSize;

    const checkTaskStyle = STYLE.includes(taskStyle) ? taskStyle : "task--primary";
    const checkTaskSize = SIZE.includes(taskSize) ? taskSize : "task--medium";
    const checkTaskColor = COLOR.includes(taskColor) ? taskColor : "task--color-primary";

    return (
        <div className={`task ${checkTaskStyle} ${checkTaskSize} ${checkTaskColor}`}>
            <div className="task--title">
                <p>{title}</p>
            </div>
        </div>
    )
}

