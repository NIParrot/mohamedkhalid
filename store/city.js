export default {
  state: () => ({
    citys: [],
    selectedcity: {}
  }),
  mutations: {
    updatecitys(state, citys){
      state.data = citys;
    },
    updateSelectedcity(state, city){
      state.selectedcity = city;
    }
  },
  actions: {
    addcity({state, commit}, payload){
      return this.$axios.$post(`/city/add`, payload).then((city) => {
        commit('updatecitys', state.citys.map( city => city));
      })
    },
    editcity({state, commit}, payload){
      return this.$axios.$post('/city/edit?id='+payload.id, payload).then((city) => {
        commit('updatecitys', state.citys.map( city => city.id == payload.id ? payload : city));
        console.log("Success Edit")
      })
    },

    getcity({state}, cityId){
      const city = state.citys.find( item => item.id == cityId);
      return city ? Promise.resolve(city) : this.$axios.$get(`city/index?id=${cityId}`)
    }
  }
}
