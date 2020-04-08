import React, { Component } from 'react';
import './navbarStyle.css'
import { Link } from 'react-router-dom';
import logo from './supercode_logo_white.png'
class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar" >
                <img src={logo} />
                <span>+49 211 7817 233-0</span>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/Kurs' >Kurs</Link></li>
                    <li><Link to='/Start' >Start</Link></li>
                </ul>
            </nav>
        );
    }
}
export default NavBar;