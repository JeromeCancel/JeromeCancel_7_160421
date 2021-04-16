import Api from './Api';

export default {
    deleteUser(id) {
        return Api.delete(`/user/${id}`);
    },
    updateUser(id, data) {
        return Api.put(`/user/${id}`, data);
    },
    getUser(id) {
        return Api.get(`/user/${id}`);
    }
};