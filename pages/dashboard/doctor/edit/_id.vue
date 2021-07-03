<template>
<div>
        <h1 style="color:#fff;" class="text-center mb-3">تعديل الدكتور</h1>
    <editform></editform>

</div>    
</template>

<script>
import editform from '../form.vue'
export default {
      middleware: "admin_authenticated",

    components:{
        editform
    }
}
</script>

<style>

</style>