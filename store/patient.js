export default {
    state: () => ({
        patients: [],
        selectedpatient: {}
    }),
    mutations: {
        updatepatients(state, patients) {
            state.data = patients;
        },
        updateSelectedpatient(state, patient) {
            state.selectedpatient = patient;
        }
    },
    actions: {
        addpatient({ state, commit }, payload) {
            return this.$axios.$post(`/patient/add`, payload).then((patient) => {
                commit('updatepatients', state.patients.map(patient => patient));
            })
        },
        editpatient({ state, commit }, payload) {
            return this.$axios.$post('/patient/edit', payload).then((patient) => {
                commit('updatepatients', state.patients.map(patient => patient.id == payload.id ? payload : patient));
                console.log("Success Edit")
            })
        },
        deletePatient({ state, commit }, payload) {
            return this.$axios.$post('/patient/delete', payload).then((patient) => {
                commit('updatepatients', state.patients.map(patient => patient));
            })
        },
      
        getpatient({ state }, patientId) {
            const patient = state.patients.find(item => item.id == patientId);
            return patient ? Promise.resolve(patient) : this.$axios.$get(`patient/index?id=${patientId}`)
        }
    }
}