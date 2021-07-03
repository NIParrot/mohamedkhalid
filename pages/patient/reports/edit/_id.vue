<template>
<div>
        <h1 style="color:#fff;" class="text-center mb-3">تعديل التقرير</h1>
    <editform></editform>

</div>    
</template>

<script>
import editform from '../form.vue'
export default {
        layout: 'patient',
  	middleware: 'pa_authenticated',

    components:{
        editform
    }
}
</script>

<style>

</style>