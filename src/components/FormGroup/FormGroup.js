/* Modules */
import React, { Component } from 'react';

/* Styles */
import './FormGroup.css';

class FormGroup extends Component {
    state = {}

    render() {
        const { props: { children } } = this;

        return (
            <div className="FormGroup">
                {children}
            </div>        
        );
    }
}

export default FormGroup