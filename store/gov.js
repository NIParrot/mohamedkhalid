export default {
    state: () => ({
        govs: [],
        selectedgov: {}
    }),
    mutations: {
        updategovs(state, govs) {
            state.data = govs;
        },
        updateSelectedgov(state, gov) {
            state.selectedgov = gov;
        }
    },
    actions: {
        addgov({ state, commit }, payload) {
            return this.$axios.$post('/states/add', payload).then((gov) => {
                commit('updategovs', state.govs.map(gov => gov));
            })
        },
        editgov({ state, commit }, payload) {
            return this.$axios.$post('/states/edit', payload).then((gov) => {
                commit('updategovs', state.govs.map(gov => gov.id == payload.id ? payload : gov));
                console.log("Success Edit")
            })
        },

        deleteGov({ state, commit }, payload) {
            return this.$axios.$post('/states/delete', payload).then((gov) => {
                commit('updategovs', state.govs.map(gov => gov));
            })
        },

        getgov({ state }, govId) {
            const gov = state.govs.find(item => item.id == govId);
            return gov ? Promise.resolve(gov) : this.$axios.$get(`states/index?id=${govId}`)
        }
    }
}