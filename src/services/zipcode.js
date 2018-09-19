/* API */
import ApiCep from '../utils/apiCep';

/* Services */
class ZipcodeService {
    static zipcode(zipcode) {
        return ApiCep.get(`http://viacep.com.br/ws/${zipcode}/json/`)
    }
}

export default ZipcodeService;
