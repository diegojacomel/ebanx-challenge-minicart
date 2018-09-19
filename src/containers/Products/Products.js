/* Modules */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

/* Components */
import InputRedux from '../../components/InputRedux/InputRedux';

/* Types */
import { FETCH_PRODUCTS, EDIT_CHECKBOX } from '../../redux/products/types';

/* Utils */
import numeral from '../../utils/numeralLocale';

/* Styles */
import './Products.css';

class Products extends Component {
    state = {}

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        const { props: { dispatch } } = this;

        dispatch({
            type: FETCH_PRODUCTS.REQUEST
        })
    }

    handleChange = (checked, id) => {
        const { props: { dispatch } } = this;

        dispatch({
            type: EDIT_CHECKBOX.SUCCESS,
            checked,
            id
        })
    }

    renderProducts() {
        const { props: { productsReducer } } = this;

        if (productsReducer.products && productsReducer.products.data && productsReducer.products.data.length) {
            return productsReducer.products.data.map((product, indexProduct) => {
                return (
                    <div key={indexProduct} className="Products-item">
                        <Field
                            name={`checkbox_${indexProduct}`}
                            component={InputRedux}
                            type="checkbox"
                            onChange={(e) => this.handleChange(e.target.checked, product.id)}
                        />
                        <img src={product.image} className="Products-item-image" alt="Product" />
                        <div className="Products-item-details">
                            <h2 className="Products-item-details-title">{product.title}</h2>
                            <p className="Products-item-details-description">{product.description}</p>
                        </div>
                        <div className="Products-item-value">{`R$ ${numeral(product.value).format('0,0.00')}`}</div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className={`Products`}>
                {this.renderProducts()}
            </div>
        );
    }
}

Products = reduxForm({
    form: "ProductsForm"
})(Products)

function mapStateToProps(state) {
    return {
        productsReducer: state.productsReducer
    }
}

export default connect(mapStateToProps)(Products);