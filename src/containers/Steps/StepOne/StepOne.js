/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

/* Components */
import FormGroup from '../../../components/FormGroup/FormGroup';
import InputRedux from '../../../components/InputRedux/InputRedux';

/* Masks */
import { normalizeCpf } from '../../../utils/masks';

/* Styles */
import './StepOne.css';

/* Validate */
import validate from './validate.js'

class StepOne extends Component {
    state = {}

    render() {
        return (
            <div className="StepOne">
                <div className="StepOne-grid">
                    <div className="StepOne-grid-first">
                        <FormGroup>
                            <Field
                                label="Name"
                                placeholder="Your name here"
                                name="name"
                                component={InputRedux}
                                type="text"
                            />
                        </FormGroup>
                    </div>
                    <div className="StepOne-grid-last">
                        <FormGroup>
                            <Field
                                label="E-mail"
                                placeholder="Your e-mail here"
                                name="email"
                                component={InputRedux}
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                label="CPF"
                                placeholder="Your CPF here"
                                name="cpf"
                                component={InputRedux}
                                type="text"
                                normalize={normalizeCpf}
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

StepOne = reduxForm({
    form: "StepOneForm",
    validate
})(StepOne)

function mapStateToProps() {
    return {
        initialValues: {
            name: "",
            email: "",
            cpf: ""
        }
    }
}

export default connect(mapStateToProps)(StepOne);