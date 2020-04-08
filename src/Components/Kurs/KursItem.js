import React, { Component } from 'react';
import './kurs.css'


class KursItem extends Component {
    state = {}
    render() {
        return (
            <div className="x-div" >
                <h1>{this.props.name}</h1>
                <p>{this.props.describtion}</p>
                <img src={this.props.url} ></img>
                <a href={this.props.href} ></a>
            </div>
        );
    }
}
export default KursItem;