/* Modules */
import { Component, createElement } from 'react';
import PropTypes from 'prop-types';

/* Styles */
import './Title.css';

class Title extends Component {
    state = {}

    render() {
        const { props: { tag } } = this;

        return (
            createElement(
                tag,
                {className: 'Title'},
                this.props.children
            )
        );
    }
}

Title.propTypes = {
    tag: PropTypes.string,
};

export default Title;