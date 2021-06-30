export default {
    state: () => ({
        reports: [],
        selectedreport: {}
    }),
    mutations: {
        updatereports(state, reports) {
            state.data = reports;
        },
        updateSelectedreports(state, report) {
            state.selectedreport = report;
        }
    },
    actions: {
        addreport({ state, commit }, payload) {
            return this.$axios.$post('/reports/add', payload).then((report) => {
                commit('updatereports', state.reports.map(report => report));
            })
        },
        editreport({ state, commit }, payload) {
            return this.$axios.$post('/reports/edit', payload).then((report) => {
                commit('updatereports', state.reports.map(report => report.id == payload.id ? payload : report));
                console.log("Success Edit")
            })
        },

        getreport({ state }, reportId) {
            const report = state.reports.find(item => item.id == reportId);
            return report ? Promise.resolve(report) : this.$axios.$get(`reports/index?id=${reportId}`)
        }
    }
}