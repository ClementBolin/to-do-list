import React from 'react';
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
        <div onClick={onClick} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <p>Project page {title}</p>
        </div>
    )
}
