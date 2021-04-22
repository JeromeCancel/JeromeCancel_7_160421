import Api from '@/services/Api';

export default {
    send (datas) {
        return Api().post('comment', datas)
    },
    findAllComment() {
        return Api().get('comment')
    },
    findOneComment(id) {
        return Api().get(`comment/${id}`)
    }
};
