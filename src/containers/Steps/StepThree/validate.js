/* Constants */
import {
    FORM_REQUIRED_FIELD
} from '../../../utils/constants';

const validate = values => {
    const errors = {
        stepThree: {
            name: ".",
            cardNumber: "",
            duoDate: "",
            cvv: ""
        }
    }
    
    if (values !== 0) {
        if (!values.name) {
            errors.name = FORM_REQUIRED_FIELD;
        }

        if (!values.cardNumber) {
            errors.cardNumber = FORM_REQUIRED_FIELD;
        }

        if (!values.duoDate) {
            errors.duoDate = FORM_REQUIRED_FIELD;
        }

        if (!values.cvv) {
            errors.cvv = FORM_REQUIRED_FIELD;
        }
    }

    return errors;
}

export default validate;

