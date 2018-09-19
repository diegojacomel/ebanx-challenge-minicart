import {
    SEND_CUSTOMER_DATA
} from './types';

const INITIAL_STATE = {
    customer: {
        data: []
    }
}

const recipientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_CUSTOMER_DATA.SUCCESS:
            return {
                ...state,
                customer: {
                    ...state.customer,
                    data: action.values
                }
            }

        default:
            return state

    }
}

export default recipientReducer;