export default {
    state: () => ({
        users: [],
        selecteduser: {}
    }),
    mutations: {
        updateusers(state, users) {
            state.data = users;
        },
        updateSelecteduser(state, user) {
            state.selecteduser = user;
        }
    },
    actions: {
        adduser({ state, commit }, payload) {
            return this.$axios.$post(`/patient/add`, payload).then((user) => {
                commit('updateusers', state.users.map(user => user));
            })
        },
        edituser({ state, commit }, payload) {
            return this.$axios.$post('/patient/edit', payload).then((user) => {
                commit('updateusers', state.users.map(user => user.id == payload.id ? payload : user));
                console.log("Success Edit")
            })
        },

        getuser({ state }, userId) {
            const user = state.users.find(item => item.id == userId);
            return user ? Promise.resolve(user) : this.$axios.$get(`patient/index?id=${userId}`)
        }
    }
}