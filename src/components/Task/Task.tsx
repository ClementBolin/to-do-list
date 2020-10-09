import React from 'react';
import './Task.scss';

const STYLES = ["taskI--primary"];
const SIZE = ["taskI--medium"];
const COLOR = ["taskI--color-primary"];

interface ITask {
    title: string;
    taskStyle?: any;
    taskSize?: any;
    taskColor?: any;
}

export const Task = ({
    title,
    taskStyle,
    taskColor,
    taskSize,
}: ITask) => {
    const checkStyle = STYLES.includes(taskStyle) ? taskStyle : "taskI--primary";
    const checkSize = SIZE.includes(taskSize) ? taskSize : "taskI--medium";
    const checkColor = COLOR.includes(taskColor) ? taskColor : "taskI--color-primary";

    return (
        <div className={`taskI ${checkStyle} ${checkSize} ${checkColor}`}>
            <p className="taskI--title">
                {title}
            </p>
        </div>
    )
}
