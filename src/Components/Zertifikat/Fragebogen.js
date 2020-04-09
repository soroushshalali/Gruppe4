import React, { Component } from 'react';
import FragebogenItem from './FragebogenItem';
import frage from './data.json';
import './certificateStyle.css'

class Fragebogen extends Component {
    state = {
        stateData: frage,
        counter: 0,
        result: 0,
        text: "",
    }
    radioFunc = (event) => {
        this.setState({ counter: Number(event.target.name) });
        console.log(this.state.counter)
        if (event.target.value == this.state.stateData[this.state.counter].antwort) {
            this.setState({ result: this.state.result + 1 });
            console.log("true")
        }
    }
    func = () => {
        if (this.state.result < 5) {
            this.setState({ text: "Oooops" });
        } else {
            this.setState({ text: "du bist Super geworden." });
        }
    }
    render() {
        const mapArry = this.state.stateData.map(el => {
            return <FragebogenItem radioFunc={this.radioFunc} frage={el.frage} name={el.id} opt1={el.arry[0]} value1={el.arry[0]} value2={el.arry[1]} opt2={el.arry[1]} value3={el.arry[2]} opt3={el.arry[2]} key={el.id} />
        })
        return (
            <main className="fragebogen-main" >
                {mapArry}
                <button onClick={this.func} >Result</button>
                <h1>{this.state.text}</h1>
            </main>
        );
    }
}

export default Fragebogen;