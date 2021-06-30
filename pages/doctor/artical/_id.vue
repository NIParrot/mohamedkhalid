<template>
	<div>
		<h2>
			<h1>{{ $store.state.artical.selectedartical.data.name }}</h1>
		</h2>
	</div>
</template>

<script>
export default {
      layout: 'doctor',

	validate({ params }) {
		return !isNaN(params.id);
	},
	fetch({ $axios, store, params }) {
		if (store.state.selectedartical && store.state.selectedartical.id == params.id)
			return true;
		return $axios.$get('/artical/index?id=' + params.id).then(res => {
			store.commit('artical/updateSelectedartical', res);
		});
	}
};
</script>

<style></style>
