import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './certificateStyle.css';

class GoodLuckItem extends Component {
    state = {}
    render() {
        return (
            <section className="goodluckItem-sec" >
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.parag}</p>
                </div>
                <div>
                    <h1>Prerequisites</h1>
                    <p>Before you apply for your exam, you should have a fundamental knowledge of:</p>
                    <ul>
                        <li>{this.props.li}</li>
                    </ul>
                </div>
                <span>Good Luck</span><br></br>
                <Link to={this.props.link} >Start</Link>
            </section >
        );
    }
}

export default GoodLuckItem;