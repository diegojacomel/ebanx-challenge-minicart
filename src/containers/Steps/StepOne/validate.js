/* Constants */
import {
    FORM_REQUIRED_FIELD,
    FORM_INVALID_CPF,
    FORM_INVALID_EMAIL
} from '../../../utils/constants';

/* Masks */
import { cpfValidation } from '../../../utils/masks';

const validate = values => {
    const errors = {
        stepOne: {
            name: "",
            email: "",
            cpf: ""
        }
    }
    
    if (values) {
        if (!values.name) {
            errors.name = FORM_REQUIRED_FIELD;
        }

        if (!values.email) {
            errors.email = FORM_REQUIRED_FIELD;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = FORM_INVALID_EMAIL;
        }

        if (!values.cpf) {
            errors.cpf = FORM_REQUIRED_FIELD;
        } else if (!cpfValidation(values.cpf) || values.cpf.length < 14) {
            errors.cpf = FORM_INVALID_CPF;
        }
    }

    return errors;
}

export default validate;