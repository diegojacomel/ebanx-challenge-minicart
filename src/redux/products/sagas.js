/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

/* Service */
import { ProductsService } from '../../services';

/* Types */
import {
    FETCH_PRODUCTS
} from './types';

function* fetchProducts(action) {
    try {
        const response = yield call(ProductsService.products);

        if (response) {
            yield put({ type: FETCH_PRODUCTS.SUCCESS, products: response });
        }
    } catch (e) {
        yield put({ type: FETCH_PRODUCTS.FAILURE, productsError: e.message });
    }
}

export const productsSagas = [
    takeEvery(FETCH_PRODUCTS.REQUEST, fetchProducts),
];