import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './navBar.css'
import { SideBarData } from './navBarData';
import { IconContext } from 'react-icons/lib';
import { Button } from '../button/Button';

export function NavBar(): any {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar)

    return (
        <>
          <IconContext.Provider value={{color: 'white'}} >
            <div className="navbar">
                <Link to="#" className="menu-bar">
                    <FaIcons.FaBars onClick={showSideBar} />
                </Link>
                <p style={{marginLeft: "45%", color: "white", fontSize: "25px", marginRight: "35%", whiteSpace: "nowrap"}}>To Do List</p>
                <Button buttonStyle="btn--outline" >SIGN UP</Button>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bar'>
                                <AiIcons.AiOutlineClose onClick={showSideBar} />
                            </Link>
                        </li>
                        {SideBarData.map((item, i) => {
                            return (
                                <li key={i} className={item.cName} >
                                    <Link to={item.path} >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
          </IconContext.Provider>
        </>
    )
}
