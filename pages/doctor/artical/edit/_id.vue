<template>
	<div>
		<h1 style="color:#fff;" class="text-center mb-3">
			تعديل النظام الغذائي
		</h1>
		<editform></editform>
	</div>
</template>

<script>
import editform from '../form.vue';
export default {
	  	middleware: 'doctor_authenticated',

	components: {
		editform
	}
};
</script>

<style></style>
