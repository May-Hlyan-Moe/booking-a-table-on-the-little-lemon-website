import { useState } from 'react';
import logo from '../images/logo.jpg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/'>
                <img src={logo} alt='logo' width={120} />
            </a>

            {/* mobile navbar */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            
            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href='/home'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservation</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;