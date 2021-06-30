export default {
    state: () => ({
        articals: [],
        selectedartical: {}
    }),
    mutations: {
        updatearticals(state, articals) {
            state.data = articals;
        },
        updateSelectedartical(state, artical) {
            state.selectedartical = artical;
        }
    },
    actions: {
        addartical({ state, commit }, payload) {
            return this.$axios.$post('/artical/add', payload).then((artical) => {
                commit('updatearticals', state.articals.map(artical => artical));
            })
        },
        editartical({ state, commit }, payload) {
            return this.$axios.$post('/artical/edit', payload).then((artical) => {
                commit('updatearticals', state.articals.map(artical => artical.id == payload.id ? payload : artical));
                console.log("Success Edit")
            })
        },

        getartical({ state }, articalId) {
            const artical = state.articals.find(item => item.id == articalId);
            return artical ? Promise.resolve(artical) : this.$axios.$get(`artical/index?id=${articalId}`)
        }
    }
}