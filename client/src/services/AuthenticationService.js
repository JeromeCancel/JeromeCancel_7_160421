import Api from './Api';

export default {
    register (datas) {
        return Api().post('register', datas)
    },
    login (datas) {
        return Api().post('login', datas)
    }
};