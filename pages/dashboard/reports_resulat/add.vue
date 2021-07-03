<template>
<div>
        <h1 style="color:#fff;" class="text-center mb-3">اضافه نتيجه للتقرير</h1>
    <addform></addform>

</div>    
</template>

<script>
import addform from './form.vue'
export default {
  middleware: "admin_authenticated",
  components: {
    addform,
  },
}
</script>
<style>

</style>