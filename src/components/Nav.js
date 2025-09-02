import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to='/'>
                <img src={logo} alt='logo' width={120} />
            </Link>

            {/* mobile navbar */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            
            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Services</Link>
                </li>
                <li>
                    <Link to='/'>Menu</Link>
                </li>
                <li>
                    <Link to='/'>Reservation</Link>
                </li>
                <li>
                    <Link to='/'>Order Online</Link>
                </li>
                <li>
                    <Link to='/'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;