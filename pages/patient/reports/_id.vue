<template>
	<div>
		<h2>
			<h1>{{ $store.state.report.selectedreport.data.name }}</h1>
		</h2>
	</div>
</template>

<script>
export default {
      layout: 'patient',

	validate({ params }) {
		return !isNaN(params.id);
	},
	fetch({ $axios, store, params }) {
		if (store.state.selectedreport && store.state.selectedreport.id == params.id)
			return true;
		return $axios.$get('/reports/index?id=' + params.id).then(res => {
			store.commit('report/updateSelectedreport', res);
		});
	}
};
</script>

<style></style>
