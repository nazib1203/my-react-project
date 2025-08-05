import React, {useState} from 'react';
// import './Header.css';
function Header(){
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => setMenuActive(!menuActive);
    return(
        <header>
            <div className="container">
                <nav>
                    <a href="home" className="logo">Basti Ki Pathshala</a>
                    <button className="hamburger" onClick={toggleMenu}>☰ </button>
                    <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                        <li><a href="#home" onClick={() =>setMenuActive(false)}>Home</a></li>
                        <li><a href="#about" onClick={() =>setMenuActive(false)}>About Us</a></li>
                        <li><a href="#volunteer" onClick={() =>setMenuActive(false)}>Volunteer</a></li>
                        <li><a href="#contact" onClick={() =>setMenuActive(false)}>Contact</a></li>
                    </ul> 
                </nav>
            </div>
        </header>
    );
}
export default Header;