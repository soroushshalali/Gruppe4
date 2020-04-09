import React, { Component } from 'react';
import FragebogenItem from './FragebogenItem';
import frage from './data.json'


let i = -1;
class Fragebogen extends Component {
    state = {
        stateData: frage,
        counter: 0,
    }
    radioFunc = (event) => {
        i = Number(event.target.name);
        this.setState({ counter: Number(event.target.name) });
        console.log(this.state.counter)
        if (event.target.value == this.state.stateData[i].antwort) {
            console.log("true")

        }
    }
    render() {
        const mapArry = this.state.stateData.map(el => {
            return <FragebogenItem radioFunc={this.radioFunc} frage={el.frage} name={el.id} opt1={el.arry[0]} value1={el.arry[0]} value2={el.arry[1]} opt2={el.arry[1]} value3={el.arry[2]} opt3={el.arry[2]} key={el.id} />
        })
        return (
            <main>
                {mapArry}
                <button onClick={this.func} >test</button>
            </main>
        );
    }
}

export default Fragebogen;