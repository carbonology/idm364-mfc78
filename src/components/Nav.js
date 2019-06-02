import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </nav>
    )
}
