import React, { Component } from 'react';
import NavBar from '../NavBar';

import KursItem from './KursItem';
import kursData from './data.json';
import './kurs.css';
class Kurs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: kursData,
            skillName: true,
            skillDescribtion: true,
            skillRating: true,
        }
        // randomSkill = () => {
        //     const randomSkill = kursData[Math.floor(Math.random() * kursdata.length)]
        //     const data = this.state.KursData
        //     kursData.push(randomKursData)
        //     this.setState({ randomSkill });
        // }

        // sortByName = () => {


        //     if (this.state.name) {

        //         const name = this.state.kursdata.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
        //         this.setState({ kursData });
        //         this.setState({ skillName: false })

        //     } else {
        //         const name = this.state.kursdata.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? -1 : 0)
        //         this.setState({ kursDdata });
        //         this.setState({ skillName: true })
        //     }

        // }
        // sortByRating = () => {
        //     const skillRating = this.state.kursData.sort((a, b) => a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0)
        //     this.setState({ skillRating });
        // }

    }
    render() {
        return (

            // <main>
            //     <NavBar />
            //     <section>
            //         <button onClick={this.sortByName} >Skills von A bis Z</button>
            //         <button onClick={this.sortByRating} >Skills nach Rating</button>
            //         <button onClick={this.sortByRandom} >Zufälliger Skill</button>
            //     </section>
            //     {this.state.kursData.map((data, i) =>
            //         <KursItem name={data.name} describtion={this.props.describtion}
            //             pictureUrl={data.pictureUrl} skillRating={data.rating}
            //             linkData={this.props.href} key={i} />)

            //     }
            // </main>
            <section>
                <h1>test</h1>
            </section>

        );
    }
}

export default Kurs;