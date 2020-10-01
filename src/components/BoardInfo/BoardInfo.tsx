import React from 'react';
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
}

export const BoardInfo = ({
    children,
    onClick,
    boardStyle,
    boardSize,
    boardColor,
    title,
    content,
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
            className={`board ${checkBoardStyle} ${checkBoardSize} ${checkBoardColor}`}
            onClick={onClick}
        >
            <p className={titleStyle} >{title}</p>
            {content}
            {content === undefined ? <p>{children}</p> : 
            // <div dangerouslySetInnerHTML={{__html: content}} />
            content
            }
        </div>
    )
}
