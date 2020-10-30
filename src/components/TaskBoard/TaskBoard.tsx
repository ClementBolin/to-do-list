import React, { useState } from 'react';
import { IBoardProject } from '../../services/models/services.models';
import './TaskBoard.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';

import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { deleteBoardProjectSV, updateBoardProjectSV } from '../../services/BoardProjectSV';

const STYLE = ["task--primary"];
const SIZE = ["task--medium", 'task--small', "task--mobile"];
const COLOR = ["task--color-primary", "task--color-blue", "task--color-green", "task--color-outline"];

interface IPropsTask {
    children?: any;
    taskStyle?: string;
    taskColor?: string;
    taskSize?: string;
    title: string;
    boardInfo?: IBoardProject;
}

export const TaskBoard = ({
    children,
    taskStyle,
    taskColor,
    taskSize,
    title,
    boardInfo
}: IPropsTask) => {
    const [showInfo, setShowInfo] = useState(false);
    const [newName, setNewName] = useState('');

    const handleClickInfo = () => setShowInfo(!showInfo);

    taskStyle = taskStyle === undefined ? "task--primary" : taskStyle;
    taskColor = taskColor === undefined ? "task--medium" : taskColor;
    taskSize = taskSize === undefined ? "task--color-primary" : taskSize;

    const checkTaskStyle = STYLE.includes(taskStyle) ? taskStyle : "task--primary";
    const checkTaskSize = SIZE.includes(taskSize) ? taskSize : "task--medium";
    const checkTaskColor = COLOR.includes(taskColor) ? taskColor : "task--color-primary";

    return (
        <div className={`task ${checkTaskStyle} ${checkTaskSize} ${checkTaskColor}`}>
            <div className={boardInfo !== undefined ? "task--title active" : "task--title active"}>
                <p>{title}</p>
                {boardInfo !== undefined &&
                    <div>
                        <AiIcons.AiFillEdit onClick={() => handleClickInfo()} style={{cursor: "pointer", margin: "0 20px"}} />
                        <RiIcons.RiDeleteBin2Fill style={{cursor: "pointer"}} onClick={() => { deleteBoardProjectSV(title); window.location.reload(false)}} />
                    </div>
                }
            </div>
            {showInfo === true && boardInfo !== undefined  &&
                <Dialog open={showInfo} onClose={handleClickInfo} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Modif task information</DialogTitle>
                    <form onSubmit={() => { updateBoardProjectSV(boardInfo.name, newName === '' ? boardInfo.name : newName); handleClickInfo(); window.location.reload(false)}}>
                        <DialogContent>
                            <DialogContentText>You can modified name and watch task attribute</DialogContentText>
                            <TextField
                                required
                                label="Name"
                                onChange={(e) => setNewName(e.target.value)}
                                defaultValue={boardInfo.name}
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClickInfo} color="primary">
                                Cancel
                            </Button>
                            <Button color="primary" type="submit">
                                Create
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            }
            {children}
        </div>
    )
}
