/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form';
import { isEqual } from 'lodash';

/* Components */
import FormGroup from '../../../components/FormGroup/FormGroup';
import InputRedux from '../../../components/InputRedux/InputRedux';

/* Types */
import { FETCH_ZIPCODE_DATA } from '../../../redux/zipcode/types';

/* Styles */
import './StepTwo.css';

/* Constants */
import { normalizeCep } from '../../../utils/masks';

/* Validate */
import validate from './validate';

class StepTwo extends Component {
    state = {}

    componentDidUpdate(prevProps) {
        const { props: { zipcodeReducer } } = this;
        const prevZipcodeData = prevProps.zipcodeReducer.zipcode && prevProps.zipcodeReducer.zipcode.data;
        const zipcodeData = zipcodeReducer.zipcode && zipcodeReducer.zipcode.data;

        if (!isEqual(prevZipcodeData, zipcodeData) && Object.keys(zipcodeData).length) {
            this.renderAddressData()
        }
    }

    handleZipcode = (e) => {
        const { props: { dispatch } } = this;
        const myZipcode = e.target.value.replace('-', '');
        const count = myZipcode.length;

        if (count === 8) {
            dispatch({
                type: FETCH_ZIPCODE_DATA.REQUEST,
                myZipcode
            });
        }
    }

    renderAddressData() {
        const { props: { dispatch, zipcodeReducer } } = this;
        const zipcodeData = zipcodeReducer.zipcode && zipcodeReducer.zipcode.data;

        dispatch(change('StepTwoForm', 'address', zipcodeData.logradouro))
        dispatch(change('StepTwoForm', 'city', zipcodeData.localidade))
        dispatch(change('StepTwoForm', 'uf', zipcodeData.uf))
    }

    renderOptionsUf() {
        const ufs = [
            "AC",
            "AL",
            "AM",
            "AP",
            "BA",
            "CE",
            "DF",
            "ES",
            "GO",
            "MA",
            "MT",
            "MS",
            "MG",
            "PA",
            "PB",
            "PR",
            "PE",
            "PI",
            "RJ",
            "RN",
            "RO",
            "RS",
            "RR",
            "SC",
            "SE",
            "SP",
            "TO"
        ];

        return ufs.map((uf, indexUf) => {
            return (
                <option key={indexUf} value={uf}>{uf}</option>
            )
        });
    }

    render() {
        return (
            <div className="StepTwo">
                <div className="StepTwo-grid">
                    <div className="StepTwo-grid-first">
                        <FormGroup>
                            <Field
                                label="Zipcode"
                                placeholder="Your zipcode here"
                                name="zipcode"
                                component={InputRedux}
                                type="text"
                                onChange={(e) => this.handleZipcode(e)}
                                maxLength={9}
                                normalize={normalizeCep}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                label="State"
                                name="uf"
                                component={InputRedux}
                                type="select"
                            >
                                <option value="">Your state here</option>
                                {this.renderOptionsUf()}
                            </Field>
                        </FormGroup>
                        <FormGroup>
                            <Field
                                label="City"
                                placeholder="Your city here"
                                name="city"
                                component={InputRedux}
                                type="text"
                            />
                        </FormGroup>
                    </div>
                    <div className="StepTwo-grid-last">
                        <FormGroup>
                            <Field
                                label="Address"
                                placeholder="Your full address here"
                                name="address"
                                component={InputRedux}
                                type="text"
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

StepTwo = reduxForm({
    form: "StepTwoForm",
    validate
})(StepTwo)

function mapStateToProps(state) {
    return {
        zipcodeReducer: state.zipcodeReducer,
        initialValues: {
            zipcode: "",
            address: "",
            city: "",
            uf: ""
        }
    }
}

export default connect(mapStateToProps)(StepTwo);