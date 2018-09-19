/* Effects */
import { all } from 'redux-saga/effects';
import { productsSagas } from './products/sagas';
import { zipcodeSagas } from './zipcode/sagas';

export default function* rootSagas() {

    // here we initialize all the sagas from different files
    yield all([
        ...productsSagas,
        ...zipcodeSagas
    ]);
}