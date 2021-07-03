export default {
  state: () => ({
    hospitals: [],
    selectedhospital: {}
  }),
  mutations: {
    updatehospitals(state, hospitals){
      state.data = hospitals;
    },
    updateSelectedhospital(state, hospital){
      state.selectedhospital = hospital;
    }
  },
  actions: {
    addhospital({state, commit}, payload){
      return this.$axios.$post(`/hospital/add`, payload).then((hospital) => {
        commit('updatehospitals', state.hospitals.map( hospital => hospital));
      })
    },
    edithospital({state, commit}, payload){
      return this.$axios.$post('/hospital/edit?id='+payload.id, payload).then((hospital) => {
        commit('updatehospitals', state.hospitals.map( hospital => hospital.id == payload.id ? payload : hospital));
        console.log("Success Edit")
      })
    },
    deleteHospital({ state, commit }, payload) {
      return this.$axios.$post('/hospital/delete', payload).then((hospital) => {
          commit('updatehospitals', state.hospitals.map(hospital => hospital));
      })
  },

    gethospital({state}, hospitalId){
      const hospital = state.hospitals.find( item => item.id == hospitalId);
      return hospital ? Promise.resolve(hospital) : this.$axios.$get(`hospital/index?id=${hospitalId}`)
    }
  }
}
