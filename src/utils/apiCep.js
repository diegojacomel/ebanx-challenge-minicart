import axios from 'axios';

class ApiCep {
    static get(uri) {
        return axios.get(uri);
    }
}

export default ApiCep;