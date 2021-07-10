<template>
	<div class="large" dir="rtl" role="main">
		<div class="row" style="margin:3%">
			<div class="col-md-4"  v-for="gov in govs" :key="gov.id">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title text-center"><span>محافظة </span>{{ gov.name }}</h5>
						<nuxt-link class="btn btn-primary govcard" :to="'hospital/'+gov.id">عرض مستشفيات العزل</nuxt-link>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>

import axios from 'axios';
export default {
	layout(context) {
		return 'main';
	},
	data() {
		return {
      govs:'',
		};
	},
	mounted() {
		this.$axios.$get('/states/index').then(res => {
			this.govs = res.data;
		});
	},
};
</script>

<style>
.govcard{
	width: 100%;
}
.drt {
	margin-bottom: 5%;
}
.drt:nth-child(odd) {
	direction: rtl;
}
.drt:nth-child(even) {
	direction: ltr;
}
</style>
