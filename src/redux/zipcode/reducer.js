import {
    FETCH_ZIPCODE_DATA
} from './types';

const INITIAL_STATE = {
    zipcode: {
        data: {},
        isLoading: false,
        errorMessage: ""
    }
}

const zipcodeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ZIPCODE_DATA.REQUEST:
            return {
                ...state,
                zipcode: {
                    ...state.zipcode,
                    data: {},
                    isLoading: true,
                    errorMessage: ""
                }
            }

        case FETCH_ZIPCODE_DATA.SUCCESS:
            return {
                ...state,
                zipcode: {
                    ...state.zipcode,
                    data: action.zipcode,
                    isLoading: false,
                    errorMessage: ""
                }
            }

        case FETCH_ZIPCODE_DATA.FAILURE:
            return {
                ...state,
                zipcode: {
                    ...state.zipcode,
                    data: {},
                    isLoading: false,
                    errorMessage: action.zipcodeError
                }
            }

        default:
            return state

    }
}

export default zipcodeReducer;