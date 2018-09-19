/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { Redirect } from 'react-router-dom';

/* Components */
import Button from '../../../components/Button/Button';
import InputRedux from '../../../components/InputRedux/InputRedux';
import FormGroup from '../../../components/FormGroup/FormGroup';
import { reduxForm, Field, change } from 'redux-form';

/* Types */
import { SEND_CUSTOMER_DATA } from '../../../redux/customer/types';

/* Images */
import images from '../../../images/images';

/* Masks */
import { cardMaks, duoMask } from '../../../utils/masks';

/* Styles */
import './StepThree.css';

/* Validate */
import validate from './validate';

class StepThree extends Component {
    state = {
        bankslip: false,
        creditCard: false,
        redirectBankslip: false,
        redirectCreditCard: false
    }

    renderPaymentOptions() {
        const { state, props: { dispatch } } = this;

        return (
            <div className="StepThree-choices">
                <Button
                    className={`StepThree-choices-item ${state.bankslip ? 'is-active' : ''}`}
                    onClick={
                        () => this.setState({
                            bankslip: true,
                            creditCard: false
                        }, () => {
                            dispatch(change('StepThreeForm', 'name', '.'))
                        })
                    }
                >
                    <img src={images.CodBar} alt="Boleto bancário"/>
                    Boleto Bancário
                </Button>
                <Button
                    className={`StepThree-choices-item  ${state.creditCard ? 'is-active' : ''}`}
                    onClick={
                        () => this.setState({
                            bankslip: false,
                            creditCard: true
                        }, () => {
                            dispatch(change('StepThreeForm', 'name', ''))
                        })
                    }
                >
                    <img src={images.Card} alt="Credit card"/>
                    Credit Card
                </Button>
            </div>
        )
    }

    fieldsCreditCard() {
        const { props: { getFormValues, invalid } } = this;

        return (
            <div className="StepThree-grid">
                <div className="StepThree-grid-first">
                    <FormGroup>
                        <Field
                            label="Cardholder name"
                            placeholder="Your name here"
                            name="name"
                            component={InputRedux}
                            type="text"
                        />
                    </FormGroup>
                </div>
                <div className="StepThree-grid-first">
                    <FormGroup>
                        <Field
                            label="Card number"
                            placeholder="1234 5678 9101 1121"
                            name="cardNumber"
                            component={InputRedux}
                            type="text"
                            normalize={cardMaks}
                        />
                    </FormGroup>
                </div>
                <div className="StepThree-grid-last">
                    <FormGroup>
                        <Field
                            label="Duo date"
                            placeholder="12/25"
                            name="duoDate"
                            component={InputRedux}
                            type="text"
                            normalize={duoMask}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Field
                            label="CVV"
                            placeholder="123"
                            name="cvv"
                            component={InputRedux}
                            type="text"
                            maxLength={3}
                        />
                    </FormGroup>
                </div>
                <Button className="StepThree-submit" onClick={() => this.buyCreditCard(getFormValues)} disabled={invalid}>
                    Buy Now
                </Button>
            </div>
        )
    }

    buyBankslip = (values) => {
        const { props: { dispatch, customerReducer } } = this;
        
        dispatch({
            type: SEND_CUSTOMER_DATA.SUCCESS,
            values
        })

        if (customerReducer.customer && customerReducer.customer.data) {
            this.setState({
                redirectBankslip: true
            })
        }

        console.log(values)
    }

    buyCreditCard = (values) => {
        const { props: { dispatch, customerReducer } } = this;

        dispatch({
            type: SEND_CUSTOMER_DATA.SUCCESS,
            values
        })

        if (customerReducer.customer && customerReducer.customer.data) {
            this.setState({
                redirectCreditCard: true
            })
        }

        console.log(values)
    }

    render() {
        const { state, props: { getFormValues } } = this;

        if (state.redirectBankslip) {
            return <Redirect push to="/purchase-bankslip" />;
        }

        if (state.redirectCreditCard) {
            return <Redirect push to="/purchase-creditcard" />;
        }

        return (
            <div className="StepThree">
                {this.renderPaymentOptions()}

                {!!state.creditCard
                    ?
                    this.fieldsCreditCard()
                    :
                    null
                }

                {!!state.bankslip
                    ?
                    <Button className="StepThree-submit" onClick={() => this.buyBankslip(getFormValues)}>
                        Buy Now
                    </Button>
                    :
                    null
                }
            </div>
        );
    }
}

StepThree = reduxForm({
    form: "StepThreeForm",
    validate
})(StepThree)

function mapStateToProps(state) {
    return {
        customerReducer: state.customerReducer,
        getFormValues: {
            stepOne: getFormValues('StepOneForm')(state),
            stepTwo: getFormValues('StepTwoForm')(state),
            stepThree: getFormValues('StepThreeForm')(state),
        }
    }
}

export default connect(mapStateToProps)(StepThree);