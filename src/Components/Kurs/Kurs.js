import React, { Component } from 'react';
import NavBar from '../NavBar';
import KursItem from './KursItem';

import kursdata from './data.json';
import './kurs.css';

class Kurs extends Component {
    state = {
        kursdata: true

    }
    sortByRating = () => {
        const kursdata = this.state.kursdata.sort((x, y) => x.rating < y.rating ? 1 : x.rating > y.rating ? -1 : 0)
        this.setState({ kursdata });
    }
    render() {
        const mapArray = kursdata.map((el, i) => {
            return <KursItem name={el.name}
                url={el.pictureUrl}

                rating={el.rating}
                key={i} />
        })
        return (
            <section>{mapArray}</section>)
    }
}
export default Kurs;