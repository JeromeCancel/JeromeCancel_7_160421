import Api from '@/services/Api';

export default {
    send (datas) {
        return Api().post('post', datas)
    },
    findAllPost () {
        return Api().get('post')
    }
};
