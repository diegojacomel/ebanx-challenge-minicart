/* Constants */
import {
    FORM_REQUIRED_FIELD,
    FORM_INVALID_ZIPCODE
} from '../../../utils/constants';

const validate = values => {
    const errors = {
        stepTwo: {
            zipcode: "",
            address: "",
            city: "",
            uf: ""
        }
    }
    
    if (values) {
        if (!values.zipcode) {
            errors.zipcode = FORM_REQUIRED_FIELD;
        } else if ((!/^[0-9]{5}-[0-9]{3}$/i.test(values.zipcode)) && values.zipcode) {
            errors.zipcode = FORM_INVALID_ZIPCODE
        }

        if (!values.address) {
            errors.address = FORM_REQUIRED_FIELD;
        }

        if (!values.city) {
            errors.city = FORM_REQUIRED_FIELD;
        }

        if (!values.uf) {
            errors.uf = FORM_REQUIRED_FIELD;
        }
    }

    return errors;
}

export default validate;