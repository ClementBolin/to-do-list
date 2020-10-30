import React, { useState } from 'react';
import './BoxProject.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';

import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { IProject } from '../../services/models/services.models';
import { deleteProjectSV, updateProjectSV } from '../../services/ProjectSV';

const STYLE = ['boxPr--primary', 'boxPr--title'];
const SIZE = ['boxPr--medium', 'boxPr--task--md', 'boxPr--small'];
const COLOR = ['boxPr--color-primary', 'boxPr--title-color'];

interface IBoxProject {
    boxProjectStyle?: string;
    boxProjectSize?: string;
    boxProjectColor?: string;
    title?: string;
    onClick?: any;
    deleate?: boolean;
    onClickDealete?: any;
    projectInfo?: IProject;
}

export const BoxProject = ({
    boxProjectStyle,
    boxProjectSize,
    boxProjectColor,
    title,
    onClick,
    deleate,
    onClickDealete,
    projectInfo
}: IBoxProject) => {
    const [showInfo, setShowInfo] = useState(false);
    const [newName, setNewName] = useState('');

    const handleClickInfo = () => setShowInfo(!showInfo);

    boxProjectStyle = boxProjectStyle === undefined ? 'boxPr--primary' : boxProjectStyle;
    boxProjectSize = boxProjectSize === undefined ? 'boxPr--medium' : boxProjectSize;
    boxProjectColor = boxProjectColor === undefined ? 'boxPr--color-primary' : boxProjectColor;

    const checkProjectStyle = STYLE.includes(boxProjectStyle) ? boxProjectStyle : 'boxPr--primary';
    const checkProjectSize = SIZE.includes(boxProjectSize) ? boxProjectSize : 'boxPr--medium';
    const checkProjectColor = COLOR.includes(boxProjectColor) ? boxProjectColor : 'boxPr--color-primary';

    return (
        <div className={`boxPr ${checkProjectStyle} ${checkProjectSize} ${checkProjectColor}`}>
            <div onClick={onClick} className={projectInfo === undefined ? "boxPr--title-it big" : "boxPr--title-it"}>
                <p>{title}</p>
            </div>
            {showInfo === true && projectInfo !== undefined  &&
                <Dialog open={showInfo} onClose={handleClickInfo} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Modif task information</DialogTitle>
                    <form onSubmit={() => { updateProjectSV(projectInfo.name, newName === '' ? projectInfo.name : newName, projectInfo.tag); handleClickInfo(); window.location.reload(false) }}>
                        <DialogContent>
                            <DialogContentText>You can modified name and watch task attribute</DialogContentText>
                            <TextField
                                required
                                label="Name"
                                onChange={(e) => setNewName(e.target.value)}
                                defaultValue={projectInfo.name}
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
            {deleate !== undefined && projectInfo !== undefined &&
                <span className="boxPr--bin">
                    <AiIcons.AiFillEdit onClick={() => handleClickInfo()} />
                    <RiIcons.RiDeleteBin2Fill onClick={() => {deleteProjectSV(projectInfo.name, projectInfo.tag); window.location.reload(false)}}/>
                </span>
            }
        </div>
    )
}
