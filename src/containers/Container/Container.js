/* Modules */
import React, { Component } from 'react';

/* Styles */
import './Container.css';

class Container extends Component {
    state = {}

    render() {
        const { props: { children } } = this;

        return (
            <div className="Container">
                {children}
            </div>            
        );
    }
}

export default Container;