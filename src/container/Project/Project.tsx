import React, { useEffect, useState } from 'react';
import { TaskBoard } from '../../components/TaskBoard/TaskBoard';
import { Modal } from '../../components/Modal/Modal';
import './Project.scss'
import { DialogContent, TextField } from '@material-ui/core';
import DialogContentText from '@material-ui/core/DialogContentText';
import { BoxProject } from '../../components/BoxProject/BoxProject';
import { useHistory } from 'react-router-dom';
import { CreateBoardProjectSV, getBoardProjectSV } from '../../services/BoardProjectSV';
import { createProjectSV, getProjectSV } from '../../services/ProjectSV';
import { IBoardProject, IProject } from '../../services/models/services.models';

const MAX_PROJECT = 3;

export function Project(): any {
    const [nameBoard, setNameBoard] = useState('');
    const [listBoard, setListBoard] = useState<IBoardProject[]>([]);

    const lenThemeProject = (): number => {
        let len = 0;
        listBoard.map((item, i) => len++)
        return len
    }

    useEffect(() => {
        getBoardProjectSV()
            .then((data) => setListBoard(data));
    }, [])

    return (
        <div className="project--container">
            {lenThemeProject() <= MAX_PROJECT &&
                <div onClick={() => console.log("you click on add Project button")}>
                    <Modal title="+" titleDialog="Create Board Project" type="form" submitForm={() => CreateBoardProjectSV(nameBoard)} >
                        <DialogContent>
                            <DialogContentText>Write Name of your Folder Project. Your max board projects is to 3</DialogContentText>
                            <TextField
                                required
                                label="Name"
                                onChange={(e) => setNameBoard(e.target.value)}
                                fullWidth
                            />
                        </DialogContent>
                    </Modal>
                </div>
            }
            <CreateProjectList list={listBoard} />
        </div>
    )
}

interface IListBoard {
    list: IBoardProject[]
}

function CreateProjectList({
    list
}: IListBoard): any {
    const [nameProject, setNameProject] = useState('');
    const [mobile, setMobile] = useState(false);
    const [listProject, setListProject] = useState<IProject[]>([]);

    const showMobile = () => {
        if (window.innerWidth <= 990)
            setMobile(true)
        else
            setMobile(false)
    }

    useEffect(() => {
        showMobile()
    }, []);

    useEffect(() => {
        getProjectSV()
            .then((data) => setListProject(data))
    }, [])

    window.addEventListener('resize', showMobile);

    const history = useHistory();

    const onClickBoxProject = (title:  string) => {
        history.push(`/project/board/${title}`);
    }

    return (
        <>
                {list.map((item: IBoardProject, i: number) => {
                    return (
                        <TaskBoard
                            title={item.name}
                            taskSize={mobile ? "task--mobile" : "task--small"}
                        >
                        <div className="project--modal">
                            <Modal title="+" titleDialog="Create Board Project" type="form" submitForm={() => createProjectSV(nameProject, item.name)}>
                                <DialogContent>
                                    <DialogContentText>Write Name of your Board Project. Your max board projects is to 3</DialogContentText>
                                    <TextField
                                        required
                                        label="Name"
                                        onChange={(e) => setNameProject(e.target.value)}
                                        fullWidth
                                    />
                                </DialogContent>
                            </Modal>
                        </div>
                            <div>
                            {listProject.map((itemPr: IProject, i: number) => {
                                if (itemPr.tag === item.name) {
                                    return (
                                        <div className="project--content">
                                            <BoxProject title={itemPr.name} boxProjectSize="boxPr--task--md" onClick={() => {
                                                onClickBoxProject(itemPr.name)
                                            }} />
                                        </div>
                                    )
                                }
                                return null
                            })}
                            </div>
                        </TaskBoard>
                    )
                })}
        </>
    )
}
