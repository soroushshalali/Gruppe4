import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './certificateStyle.css';

class CertificateItem extends Component {
    state = {}
    render() {
        return (
            <section className="certifi-SEC" >
                <h1>{this.props.title}</h1>
                <p>{this.props.parag}</p>
                <Link to={this.props.link} >Get Certificate Now</Link>
            </section>
        );
    }
}

export default CertificateItem;