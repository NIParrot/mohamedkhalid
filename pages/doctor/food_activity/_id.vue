<template>
	<div>
	<div v-html="this.renderHtmlCkeditor()"></div>

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
	},
	methods: {
		renderHtmlCkeditor(){
			return decodeURIComponent(escape(window.atob($nuxt.$store.state.artical.selectedartical.data.description)));
		}
	}
};
</script>

<style></style>
