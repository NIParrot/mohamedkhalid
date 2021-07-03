<template>
  <div>
   <h2>
         <h1>{{$store.state.doctor.selecteddoctor.data.name}}</h1>
    </h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    middleware: "admin_authenticated",

  validate({params}){
    return !isNaN(params.id);
  },
  fetch({$axios, store, params}){
    if(store.state.selecteddoctor && store.state.selecteddoctor.id == params.id) return true;
    return $axios.$get('/doctor/index?id='+params.id).then( res => {
      store.commit('doctor/updateSelecteddoctor', res);
    })
  },
}
</script>

<style>

</style>