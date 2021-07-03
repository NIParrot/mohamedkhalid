<template>
	<div>
		<h2>
			<h1>{{ $store.state.gov.selectedgov.data.name }}</h1>
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
		if (store.state.selectedgov && store.state.selectedgov.id == params.id)
			return true;
		return $axios.$get('/states/index?id=' + params.id).then(res => {
			store.commit('gov/updateSelectedgov', res);
		});
	}
};
</script>

<style></style>
