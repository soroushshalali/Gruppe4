import React, { Component } from 'react';
class StartsItem extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>{this.props.frage}</h1>
                <label for="points">(between 0 and 10):</label>
                <input onChange={this.props.funcRange} type="range" name={this.props.name} min="0" max="10" />
            </div>
        );
    }
}
export default StartsItem;