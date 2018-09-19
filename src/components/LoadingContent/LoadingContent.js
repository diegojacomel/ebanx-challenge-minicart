/* Modules */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingContent extends Component {
    state = {}

    render() {
        const { props: { isLoading, children } } = this;
        return (
            <div className="LoadingContent">
                {isLoading
                    ?
                    'Carregando ...'
                    :
                    children
                }
            </div>            
        );
    }
}

LoadingContent.propTypes = {
    isLoading: PropTypes.bool
};

export default LoadingContent;