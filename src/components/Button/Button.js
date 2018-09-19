/* Modules */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    state = {}

    render() {
        const { props: { children, className, onClick, type, ...extraProps } } = this;

        return (
            <button
                {...extraProps}
                className={`button ${className}`}
                type={type || "button"}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
};

export default Button;