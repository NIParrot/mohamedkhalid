<template>
	<div class="large" dir="rtl" role="main">
		<div>
			<div v-for="artical in articals" :key="artical.id" class="drt">
				<div class="container">
					<div>
						<div class="row">
							<div class="col-md-6">
								<h3
									class="text-center"
									style="color: #000;font-size:25px;"
								>
									{{ artical.name }}
								</h3>
								<h5
									class="float-left"
									style="color:#000;font-size:10px;"
								>
									{{ artical.notes }}
								</h5>
								<h5
									class="float-right"
									style="color:#000;font-size:10px;"
								>
									{{ artical.update_at }}
								</h5>
								<br />
								<div class="clearfix"></div>
								<div
									style="color:#000"
									class="acf"
									v-html="
										renderHtmlCkeditor(artical.description)
									"
								></div>
							</div>
							<div class="col-md-6">
								<img
									:src="
										'https://coronavirous.ninameserver.xyz/storage/' +
											artical.img
									"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<br />
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
			counter: 0,
			articals: '',
			limit: 5,
			busy: false,
			page: 1
		};
	},
	mounted() {
		if (this.renderHtmlCkeditor === null) {
			this.renderHtmlCkeditor();
		}
		let count = 0;
		this.$axios.$get('/artical/index?type=artical').then(res => {
			this.articals = res.data;
		});
	},

	methods: {
		renderHtmlCkeditor(data) {
			return decodeURIComponent(escape(window.atob(data)));
		}
	}
};
</script>

<style>
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
