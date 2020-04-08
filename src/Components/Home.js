import React, { Component } from 'react';
import NavBar from './NavBar';




class Home extends Component {
    state = {}
    render() {
        return (
            <main>
                <NavBar />
                <h1>Hi</h1>
            </main>
        );
    }
}

export default Home;