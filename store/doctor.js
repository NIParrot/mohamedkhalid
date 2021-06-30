export default {
  state: () => ({
    doctors: [],
    selecteddoctor: {}
  }),
  mutations: {
    updatedoctors(state, doctors){
      state.data = doctors;
    },
    updateSelecteddoctor(state, doctor){
      state.selecteddoctor = doctor;
    }
  },
  actions: {
    adddoctor({state, commit}, payload){
      return this.$axios.$post(`/doctor/add`, payload).then((doctor) => {
        commit('updatedoctors', state.doctors.map( doctor => doctor));
      })
    },
    editdoctor({state, commit}, payload){
      return this.$axios.$post('/doctor/edit?id='+payload.id, payload).then((doctor) => {
        commit('updatedoctors', state.doctors.map( doctor => doctor.id == payload.id ? payload : doctor));
        console.log("Success Edit")
      })
    },

    getdoctor({state}, doctorId){
      const doctor = state.doctors.find( item => item.id == doctorId);
      return doctor ? Promise.resolve(doctor) : this.$axios.$get(`doctor/index?id=${doctorId}`)
    }
  }
}
