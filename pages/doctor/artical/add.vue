<template>
<div>
        <h1 style="color:#fff;" class="text-center mb-3">اضافة مقال</h1>
    <addform></addform>
<!--
              @click="addDepartment"
-->
</div>    
</template>

<script>
import addform from './form.vue'
export default {
        layout: 'doctor',

  components: {
    addform,
  },
}
</script>
<style>

</style>