/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

/* Types */
import { TOTAL_PRODUCTS } from '../../redux/products/types';

/* Utils */
import numeral from '../../utils/numeralLocale';

/* Styles */
import './TotalProducts.css';

class TotalProducts extends Component {
    state = {}

    componentDidUpdate(prevProps) {
        const { props: { productsReducer } } = this;
        const prevProducts = prevProps.productsReducer.products && prevProps.productsReducer.products.data;
        const products = productsReducer.products && productsReducer.products.data;

        if (!isEqual(prevProducts, products)) {
            this.calcTotalProducts()
        }
    }

    calcTotalProducts() {
        const { props: { productsReducer, dispatch } } = this;
        let total;

        if (productsReducer.products && productsReducer.products.data && productsReducer.products.data.length) {
            total = productsReducer.products.data.filter(x => x.checked === true).reduce((acc, cur) => {
                return acc + cur.value;
            }, 0)

            dispatch({
                type: TOTAL_PRODUCTS.SUCCESS,
                total
            })
        }
    }

    render() {
        const { props: { productsReducer } } = this;

        return (
            <div className="TotalProducts">
                <div className="TotalProducts-label">
                    Total
                </div>
                <div className="TotalProducts-value">
                    {`R$ ${numeral(productsReducer.products.total).format('0,0.00')}`}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productsReducer: state.productsReducer
    }
}

export default connect(mapStateToProps)(TotalProducts);