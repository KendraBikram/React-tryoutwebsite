import React, {useState} from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color: '#ffff'}}>
        <div className="navbar">
            <Link className='menu-bar'>
                <AiIcons.AiOutlineMenuFold onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
            <ul className='nav-menu-items'>
                    <div className="navbar">
                    <Link to='#' className='menu-bars'>
                       <AiIcons.AiOutlineMenuUnfold onClick={showSidebar}/>
                    </Link>
                    </div>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} onClick={showSidebar}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
