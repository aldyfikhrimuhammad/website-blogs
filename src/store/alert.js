export default {
    namespaced: true,
    state: {
        status: false,
        color: "success",
        text: "",
    },
    //  Untuk mengubah data dari state
    mutations: {
        set : (state, payload) => {
            state.status = payload.status;
            state.color = payload.color;
            state.text = payload.text;
        }
    },
    //  Untuk mengirim / commit data dari mutations
    actions: {
        set : ({commit}, payload) => {
            commit('set', payload);
        }
    },
    // Getters untuk mengambil data dari state
    getters: {
        status: state => state.status,
        color: state => state.color,
        text: state => state.text
    }
}