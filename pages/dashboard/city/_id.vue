<template>
	<div>
		<h2>
			<h1>{{ $store.state.city.selectedcity.data.name }}</h1>
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
			store.state.selectedcity &&
			store.state.selectedcity.id == params.id
		)
			return true;
		return $axios.$get('/city/index?id=' + params.id).then(res => {
			store.commit('city/updateSelectedcity', res);
		});
	}
};
</script>

<style></style>
