import React, { useState } from 'react';
import './BoxProject.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';

import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { IProject } from '../../services/models/services.models';

const STYLE = ['boxPr--primary', 'boxPr--title'];
const SIZE = ['boxPr--medium', 'boxPr--task--md', 'boxPr--small'];
const COLOR = ['boxPr--color-primary', 'boxPr--title-color'];

interface IBoxProject {
    children?: any;
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
    children,
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

    const handleClickInfo = () => setShowInfo(!showInfo);

    boxProjectStyle = boxProjectStyle === undefined ? 'boxPr--primary' : boxProjectStyle;
    boxProjectSize = boxProjectSize === undefined ? 'boxPr--medium' : boxProjectSize;
    boxProjectColor = boxProjectColor === undefined ? 'boxPr--color-primary' : boxProjectColor;

    const checkProjectStyle = STYLE.includes(boxProjectStyle) ? boxProjectStyle : 'boxPr--primary';
    const checkProjectSize = SIZE.includes(boxProjectSize) ? boxProjectSize : 'boxPr--medium';
    const checkProjectColor = COLOR.includes(boxProjectColor) ? boxProjectColor : 'boxPr--color-primary';

    return (
        <div className={`boxPr ${checkProjectStyle} ${checkProjectSize} ${checkProjectColor}`}>
            <div onClick={onClick} className="boxPr--title-it">
                <p>{title}</p>
            </div>
            {showInfo === true && projectInfo !== undefined  &&
                <Dialog open={showInfo} onClose={handleClickInfo} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Modif task information</DialogTitle>
                    <form onSubmit={() => { handleClickInfo() }}>
                        <DialogContent>
                            <DialogContentText>You can modified name and watch task attribute</DialogContentText>
                            <TextField
                                required
                                label="Name" 
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
            {deleate !== undefined &&
                <span className="boxPr--bin">
                    <RiIcons.RiDeleteBin2Fill onClick={() => console.log("deleate elem")}/>
                    <AiIcons.AiFillEdit onClick={() => handleClickInfo()} />
                </span>
            }
        </div>
    )
}
