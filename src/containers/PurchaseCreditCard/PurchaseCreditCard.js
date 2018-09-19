/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import Container from '../Container/Container';
import Title from '../../components/Title/Title';
import Footer from '../Footer/Footer';

/* Styles */
import './PurchaseCreditCard.css';

class PurchaseCreditCard extends Component {
    state = {}

    cardNumber() {
        const { props: { customerReducer } } = this;
        const { cardNumber } = customerReducer.customer && customerReducer.customer.data && customerReducer.customer.data.stepThree

        const editedCardNumber = `${cardNumber.slice(0, 7)}** **** ${cardNumber.slice(15, 19)}`

        return editedCardNumber;
    }

    render() {
        return (
            <div className="PurchaseCreditCard">
                <Container>
                    <Title tag="h1">
                        E-book Store
                    </Title>

                    <div className="PurchaseCreditCard-text">
                        <p>
                            <strong>
                                Purchase realized with success!
                            </strong>
                        </p>
                        <p>
                            The payment using the credit card <strong>{this.cardNumber()}</strong> was made successfully
                        </p>
                    </div>

                    <Footer />
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        customerReducer: state.customerReducer
    }
}

export default connect(mapStateToProps)(PurchaseCreditCard);