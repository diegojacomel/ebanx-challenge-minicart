/* Modules */
import React, { Component, Fragment } from 'react';

/* Components */
import LoadingContent from '../LoadingContent/LoadingContent';

/* Styles */
import './InputRedux.css';

class InputRedux extends Component {
    state = {}

    showMessageError() {
        const props = this.props;

        if (props.showCustomFeedback) {
            return <div style={{ color: '#d30', fontSize: '11px', paddingTop: '3px', fontWeight: '700' }}>{props.customFeedback}</div>;
        } else {
            return (
                props.meta.touched && !props.showCustomFeedback ?
                    props.meta.error && <div style={{ color: '#d30', fontSize: '11px', paddingTop: '3px', fontWeight: '700' }}>{props.meta.error}</div>
                    : null
            )
        }
    }

    render() {
        const {
            input,
            id,
            type,
            placeholder,
            disabled,
            className,
            maxLength,
            onKeyUp,
            onChange,
            label,
            isLoading,
            defaultValue,
            ...extraProps
        } = this.props;

        if (type === 'select') {
            return (
                <Fragment>
                    {label &&
                        <label>
                            {label}
                        </label>
                    }

                    <div className="InputRedux -select">
                        <LoadingContent type="select" isLoading={isLoading}>
                            <select
                                {...input}
                                type={type}
                                id={id}
                                placeholder={placeholder}
                                disabled={disabled}
                                className={className}
                                defaultValue={defaultValue}
                            >
                                {this.props.children}
                            </select>
                        </LoadingContent>
                    </div>

                    {this.showMessageError()}
                </Fragment>
            )
        }

        if (type === 'checkbox') {
            return (
                <Fragment>
                    {label &&
                        <label>
                            {label}
                        </label>
                    }
    
                    <div className="InputRedux -checkbox">
                        <LoadingContent isLoading={isLoading}>
                                <input
                                    {...input}
                                    id={id}
                                    type={type}
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    className={className}
                                    maxLength={maxLength}
                                    onKeyUp={onKeyUp}
                                    defaultValue={defaultValue}
                                    {...extraProps}
                                />
                        </LoadingContent>
                    </div>

                    {this.showMessageError()}
                </Fragment>
    
            );
        }

        return (
            <Fragment>
                {label &&
                    <label>
                        {label}
                    </label>
                }

                <div className="InputRedux -text">
                    <LoadingContent isLoading={isLoading}>
                            <input
                                {...input}
                                id={id}
                                type={type ? type : 'text'}
                                placeholder={placeholder}
                                disabled={disabled}
                                className={className}
                                maxLength={maxLength}
                                onKeyUp={onKeyUp}
                                defaultValue={defaultValue}
                                {...extraProps}
                            />
                    </LoadingContent>
                </div>

                {this.showMessageError()}
            </Fragment>

        );
    }
}

export default InputRedux;