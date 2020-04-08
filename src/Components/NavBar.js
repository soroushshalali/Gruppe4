import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav>
                <Link to={this.props.home} >Home</Link>
                <Link to={this.props.kurs} >Online Kurs</Link>
            </nav>
        );
    }
}

export default NavBar;