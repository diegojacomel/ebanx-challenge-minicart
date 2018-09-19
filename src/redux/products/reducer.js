import {
    FETCH_PRODUCTS,
    EDIT_CHECKBOX,
    TOTAL_PRODUCTS
} from './types';

const INITIAL_STATE = {
    products: {
        data: [],
        isLoading: false,
        errorMessage: "",
        total: null
    }
}

const recipientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS.REQUEST:
            return {
                ...state,
                products: {
                    ...state.products,
                    data: [],
                    isLoading: true,
                    errorMessage: ""
                }
            }

        case FETCH_PRODUCTS.SUCCESS:
            return {
                ...state,
                products: {
                    ...state.products,
                    data: action.products,
                    isLoading: false,
                    errorMessage: ""
                }
            }

        case FETCH_PRODUCTS.FAILURE:
            return {
                ...state,
                products: {
                    ...state.products,
                    data: [],
                    isLoading: false,
                    errorMessage: action.productsError
                }
            }

        case EDIT_CHECKBOX.SUCCESS:
            return {
                ...state,
                products: {
                    ...state.products,
                    data: state.products.data.map((product) => {
                        if (action.id === product.id)  {
                            return {
                                ...product,
                                checked: action.checked
                            }
                        }
                        return product
                    })
                }
            }

        case TOTAL_PRODUCTS.SUCCESS:
            return {
                ...state,
                products: {
                    ...state.products,
                    total: action.total
                }
            }

        default:
            return state

    }
}

export default recipientReducer;