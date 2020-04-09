import React, { Component } from 'react';
import CertificateItem from './CertificateItem';
import './certificateStyle.css';

class Zertifikat extends Component {
    state = {}
    render() {
        return (
            <main className="certi-main" >
                <CertificateItem title="HTML Certificate" parag="The HTML Developer Certificate proves fundamental knowledge of web development using HTML." link='/goodluck' />
                <CertificateItem title="HTML Certificate" parag="The HTML Developer Certificate proves fundamental knowledge of web development using HTML." link='/goodluck' />
                <CertificateItem title="HTML Certificate" parag="The HTML Developer Certificate proves fundamental knowledge of web development using HTML." link='/goodluck' />
            </main>
        );
    }
}

export default Zertifikat;