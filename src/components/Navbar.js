// import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // const { t, toggleLang, lang } = useContext(LangContext);
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Artworks</Link></li>
                <li><Link to="/chars">Character Art</Link></li>
                <li><Link to="/commissions">Commissions</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
};