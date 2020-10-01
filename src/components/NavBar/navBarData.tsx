import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SideBarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Mail",
        path: "/mail",
        icon: <AiIcons.AiFillMail />,
        cName: "nav-text"
    },
    {
        title: "Project",
        path: "/project",
        icon: <AiIcons.AiFillProject />,
        cName: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <MdIcons.MdHelp />,
        cName: "nav-text"
    },
]
