import React, { useState, useEffect } from 'react';

import * as FiIcons from 'react-icons/fi';

import { Link } from 'react-router-dom';
import './navBar.css'
import { SideBarData } from './navBarData';
import { IconContext } from 'react-icons/lib';

export function NavBar(): any {
    const [button, setButton] = useState(true);
    const [menu, setMenu] = useState(true);

    const showMenu = () => setMenu(!menu);

    const showButton = () => {
        if (window.innerWidth <= 990) {
            setButton(false);
            setMenu(false);
        }
        else
            setButton(true);
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <IconContext.Provider value={{color: 'white'}} >
            <div className="navbar">
                <div className="nav--container">
                    <Link to="/" className="nav--logo">
                        <p style={{color: "white"}}>To Do List</p>
                    </Link>
                    {button === true ? null : 
                        <div className="nav--btn">
                            <FiIcons.FiMenu onClick={showMenu}/>
                        </div>
                    }
                    <div className={menu ? "nav--option active" : "nav--option"}>
                        {SideBarData.map((item, i) => {
                            return (
                                <li key={i} className={item.cName} >
                                    <Link to={item.path} className="links--nave" onClick={showMenu}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        {/* <div className="nav--button">
                            <Button buttonStyle="btn--outline" >SIGN UP</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}
