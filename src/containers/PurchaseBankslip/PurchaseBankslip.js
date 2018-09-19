/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import Container from '../Container/Container';
import Title from '../../components/Title/Title';
import Footer from '../Footer/Footer';

/* Styles */
import './PurchaseBankslip.css';

class PurchaseBankslip extends Component {
    state = {}

    emailCustomer() {
        const { props: { customerReducer } } = this;
        const { email } = customerReducer.customer && customerReducer.customer.data && customerReducer.customer.data.stepOne

        return email;
    }

    render() {
        return (
            <div className="PurchaseBankslip">
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
                            The boleto was created with success and sent to email <strong>{this.emailCustomer()}</strong>
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

export default connect(mapStateToProps)(PurchaseBankslip);