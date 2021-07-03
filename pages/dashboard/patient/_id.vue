<template>
  <div>
   <h2>
         <h1>{{$store.state.user.selecteduser.data.fullname}}</h1>
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
    if(store.state.selecteduser && store.state.selecteduser.id == params.id) return true;
    return $axios.$get('/patient/index?id='+params.id).then( res => {
      store.commit('user/updateSelecteduser', res);
    })
  },
}
</script>

<style>

</style>