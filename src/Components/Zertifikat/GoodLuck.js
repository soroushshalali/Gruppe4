import React, { Component } from 'react';
import './certificateStyle.css';
import GoodLuckItem from './GoodLuckItem';


class GoodLuck extends Component {
    state = {}
    render() {
        return (
            <main className="goodluck-main" >
                <GoodLuckItem title="The HTML Developer Certificate" parag="HTML is the foundation of web development.

HTML is used to format text, create hyperlinks, tables, lists, forms, display images and more.

By mastering HTML you will be able to develop and maintain web pages unlimited to a particular software program's features.

The HTML Developer Certificate proves fundamental knowledge of web development using HTML."  li="The Hypertext Markup Language - HTML
" to='/' />
            </main>
        );
    }
}

export default GoodLuck;