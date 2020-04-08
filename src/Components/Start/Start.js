import React, { Component } from 'react';
import StartsItem from './StartsItem';
import NavBar from '../NavBar';
class Start extends Component {
    state = {
        stateHtml: 0,
        stateCss: 0,
        stateJs: 0,
        stateSum: 0,
        result: "",
    }
    handleChange = (el) => {
        let html = 0;
        let css = 0;
        let js = 0;
        if (el.target.name == "html") {
            this.setState({ stateHtml: Number(el.target.value) });
        } else if (el.target.name == "css") {
            this.setState({ stateCss: Number(el.target.value) });
        } else {
            this.setState({ stateJs: Number(el.target.value) });
        }
        this.setState({ stateSum: this.state.stateJs + this.state.stateCss + this.state.stateHtml });
    }
    result = () => {
        if (this.state.stateSum < 11) {
            this.setState({ result: "Anfänger" });
        } else if (this.state.stateSum < 20) {
            this.setState({ result: "das Wort ,das ich nicht weiß" });
        } else {
            this.setState({ result: "Super" });
        }
    }
    render() {
        return (
            <main className="startMain" >
                <NavBar />
                <section>
                    <StartsItem frage="wie ist deine Kentnisse in Html?" funcRange={this.handleChange} name="html" />
                    <StartsItem frage="wie ist deine Kentnisse in css?" funcRange={this.handleChange} name="css" />
                    <StartsItem frage="wie ist deine Kentnisse in JS?" funcRange={this.handleChange} name="js" />
                    <h1>{this.state.result}</h1>
                    <button onClick={this.result} >Submit</button>
                </section>

            </main>
        );
    }
}

export default Start;