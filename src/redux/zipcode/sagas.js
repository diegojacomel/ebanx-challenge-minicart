/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

/* Service */
import { ZipcodeService } from '../../services';

/* Types */
import {
    FETCH_ZIPCODE_DATA
} from './types';

function* fetchAddress(action) {
    try {
        const response = yield call(ZipcodeService.zipcode, action.myZipcode);

        if (response) {
            yield put({ type: FETCH_ZIPCODE_DATA.SUCCESS, zipcode: response.data });
        }
    } catch (e) {
        yield put({ type: FETCH_ZIPCODE_DATA.FAILURE, zipcodeError: e.response.message });
    }
}

export const zipcodeSagas = [
    takeEvery(FETCH_ZIPCODE_DATA.REQUEST, fetchAddress),
];