/* Modules */
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/* Components */
import App from '../containers/App/App';
import PurchaseBankslip from '../containers/PurchaseBankslip/PurchaseBankslip';
import PurchaseCreditCard from '../containers/PurchaseCreditCard/PurchaseCreditCard';

class MyRouter extends Component {
    state = {}

    render () {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/purchase-bankslip" component={PurchaseBankslip} />
                <Route exact path="/purchase-creditcard" component={PurchaseCreditCard} />
            </Switch>
        )
    }
}

export default withRouter(connect()(MyRouter));