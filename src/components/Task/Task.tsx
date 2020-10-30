import React, { useState } from 'react';
import './Task.scss';
import * as RiIcons from 'react-icons/ri';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField } from '@material-ui/core';
import { ITask } from '../../services/models/services.models';
import { deleteTaskSV, updateTaskSV } from '../../services/TaskSV';

const STYLES = ["taskI--primary"];
const SIZE = ["taskI--medium"];
const COLOR = ["taskI--color-primary"];

interface ITaskC {
    title: string;
    taskStyle?: any;
    taskSize?: any;
    taskColor?: any;
    deleate?: boolean;
    onClickDealete?: any;
    taskInfo: ITask;
}

const currencies = [
    {
      value: 'To Do',
      label: 'To Do',
    },
    {
      value: 'In Progress',
      label: 'In Progress',
    },
    {
      value: 'Done',
      label: 'Done',
    },
  ];

export const Task = ({
    title,
    taskStyle,
    taskColor,
    taskSize,
    deleate,
    onClickDealete,
    taskInfo
}: ITaskC) => {
    const [showInfo, setShowInfo] = useState(false);
    const [currency, setCurrency] = React.useState(taskInfo.type);
    const [newName, setNewName] = useState('');

    const handleClickInfo = () => setShowInfo(!showInfo);

    const checkStyle = STYLES.includes(taskStyle) ? taskStyle : "taskI--primary";
    const checkSize = SIZE.includes(taskSize) ? taskSize : "taskI--medium";
    const checkColor = COLOR.includes(taskColor) ? taskColor : "taskI--color-primary";

    return (
        <div className={`taskI ${checkStyle} ${checkSize} ${checkColor}`}>
            <p className="taskI--title" onClick={() => handleClickInfo()} >
                {title}
            </p>
            {showInfo === true && taskInfo !== undefined  &&
                <Dialog open={showInfo} onClose={handleClickInfo} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Modif task information</DialogTitle>
                    <form onSubmit={() => { updateTaskSV(taskInfo.name, newName !== ''? newName : taskInfo.name , taskInfo.tag, currency, taskInfo.type); handleClickInfo(); window.location.reload(false) }}>
                        <DialogContent>
                            <DialogContentText>You can modified name and watch task attribute</DialogContentText>
                            <TextField
                                required
                                label="Name"
                                onChange={(e) => setNewName(e.target.value)}
                                defaultValue={taskInfo.name}
                                fullWidth
                            />
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Status"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                helperText="Please select your currency"
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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
            {deleate !== undefined &&
                <span className="boxPr--bin" onClick={() => { deleteTaskSV(taskInfo.name, taskInfo.tag, taskInfo.type); window.location.reload(false) }}>
                    <RiIcons.RiDeleteBin2Fill />
                </span>
            }
        </div>
    )
}
