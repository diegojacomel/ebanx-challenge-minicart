/* Modules */
import React, { Component } from 'react';

class Intro extends Component {
    state = {}

    render() {
        const { props: { children } } = this;

        return (
            <div className={`intro`}>
                {children}
            </div>
        );
    }
}

export default Intro;