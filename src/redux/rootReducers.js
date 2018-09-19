/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products/reducer';
import zipcodeReducer from './zipcode/reducer';
import customerReducer from './customer/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    form: formReducer,
    productsReducer: productsReducer,
    zipcodeReducer: zipcodeReducer,
    customerReducer: customerReducer
})

export default rootReducers;