import React, { Component } from 'react';



class FragebogenItem extends Component {
    state = {}
    render() {
        return (
            <section>

                <h1>{this.props.frage}</h1>
                <select onChange={this.props.radioFunc} name={this.props.name} >
                    <option>{this.props.value1}</option>
                    <option>{this.props.value2}</option>
                    <option>{this.props.value3}</option>
                </select>
            </section>
        );
    }
}

export default FragebogenItem;