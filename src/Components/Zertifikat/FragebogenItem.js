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
                {/* {this.props.opt1}
                <input onChange={this.props.radioFunc} type="radio" name={this.props.name} value={this.props.value1} />
                {this.props.opt2}
                <input onChange={this.props.radioFunc} type="radio" name={this.props.name} value={this.props.value2} />
                {this.props.opt3}
                <input onChange={this.props.radioFunc} type="radio" name={this.props.name} value={this.props.value3} /> */}
            </section>
        );
    }
}

export default FragebogenItem;