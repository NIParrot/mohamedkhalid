<template>
	<div>
		<h2>
			<h1>{{ $store.state.hospital.selectedhospital.data.name }}</h1>
		</h2>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	  middleware: "admin_authenticated",

	validate({ params }) {
		return !isNaN(params.id);
	},
	fetch({ $axios, store, params }) {
		if (
			store.state.selectedhospital &&
			store.state.selectedhospital.id == params.id
		)
			return true;
		return $axios.$get('/hospital/index?id=' + params.id).then(res => {
			store.commit('hospital/updateSelectedhospital', res);
		});
	}
};
</script>

<style></style>
