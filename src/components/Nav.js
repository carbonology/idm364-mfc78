import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav className="nav">
            <Link to="/">
                <img className="nav__logo" src="./images/logo.png" alt="Aunt Jemima's Apocalypse Diner" />
            </Link>
            <ul className="nav__list">
                <li className="nav__item"><Link className="nav__link" to="/">Menu</Link></li>
                <li className="nav__item"><Link className="nav__link" to="/cart">Cart</Link></li>
                <li className="nav__item"><Link className="nav__link" to="/admin">Admin</Link></li>
            </ul>
        </nav>
    )
}
