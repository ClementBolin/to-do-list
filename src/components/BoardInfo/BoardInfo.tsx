import React from 'react';
import * as AiIcons from 'react-icons/ai';
import './BoardInfo.scss'

const STYLES = ['board--primary'];
const SIZES = ['board--medium', 'board--large', 'board--mobile', 'board--long'];
const COLOR = ['primary'];

interface IPropsBoard {
    children?: any;
    onClick?: any;
    boardStyle?: string;
    boardSize?: string;
    boardColor?: string;
    title?: string;
    content?: any;
    data?: any[];
    type?: any;
}

export const BoardInfo = ({
    children,
    onClick,
    boardStyle,
    boardSize,
    boardColor,
    title,
    content,
    data,
    type,
}: IPropsBoard, props: any) => {
    boardStyle = boardStyle === undefined ? "board--primary" : boardStyle;
    boardSize = boardSize === undefined ? "board--medium" : boardSize;
    boardColor = boardColor === undefined ? "primary" : boardColor;

    const titleStyle =  title === undefined ? "" : "board--title"
    const checkBoardStyle = STYLES.includes(boardStyle) ? boardStyle : "board--primary";
    const checkBoardSize = SIZES.includes(boardSize) ? boardSize : "board--medium";
    const checkBoardColor = COLOR.includes(boardColor) ? boardColor : "primary";

    return (
        <div
            className={`board  ${checkBoardSize} ${checkBoardColor}`}
            onClick={onClick}
        >
            <div className={`${checkBoardStyle}`}>
                <p className={titleStyle} >{title}</p>
            </div>
                {type === "project" ? 
                    <div className="board--project">
                        {data?.map((item, i) => {
                            return (
                                <div className="board--data-project">
                                    <p>{item.projectName}</p>
                                    <p>Issue {item.totalIssue}</p>
                                    <AiIcons.AiFillDelete />
                                </div>
                            )
                        })}
                    </div>
                    :
                    <p>In developemnt</p>
                }
        </div>
    )
}
