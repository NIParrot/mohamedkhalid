<template>
<div>
        <h1 style="color:#fff;" class="text-center mb-3">رفع التقرير</h1>
    <addform></addform>

</div>    
</template>

<script>
import addform from './form.vue'
export default {
    mounted(){
        console.log(this.gov);
    },
 
      
 
  methods: {
    gov_form({ $axios }) {
      this.$axios.$post('http://192.168.1.9:7979/api/states/add',this.gov).then(res => {
          console.log(res);
        })
    },
  },
  components: {
    addform,
  },
}
</script>
<style>

</style>