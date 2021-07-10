<template><div>

			<div v-for="hospital in $store.state.hospital.selectedhospital.data" :key="hospital.id" class="drt">
				<div class="container">
					<div>
						<div class="row">
							<div class="col-md-6">
								<h1
									class="text-center"
									style="color: #3dc1c7"
								>
									{{ hospital.name }}
								</h1>
								<h5
									class="float-left"
									style="color:#000"
								>
								</h5>
								<h5
									class="float-right"
									style="color:#000;font-size:10px;"
								>
									تاريخ الاضافة: {{ hospital.update_at }}
								</h5>
								<div class="clearfix"></div>
								<div
									style="color:#000"
									class="acf"
								>
								سيتم توفر معلومات المستشفي و عدد الاماكن المتوفرة قريبا بالربط مع وزارة الصحة
								</div>

							</div>
							<!--
							
							<div class="col-md-6">
								<img
									:src="
										'https://coronavirous.ninameserver.xyz/storage/' +
											artical.img
									"
									alt=""
								/>
							</div>
							
							-->
						</div>
					</div>
				</div>
				<br />

					

	</div>



			</div>

</template>

<script>
import axios from 'axios';
export default {
	  	  layout: "main",

	validate({ params }) {
		return !isNaN(params.id);
	},
	 fetch({ $axios, store, params }) {
		if (
			store.state.selectedhospital &&
			store.state.selectedhospital.id == params.id
		)
			return true;
		return $axios.$get('/hospital/getbystate/' + params.id).then(res => {
			store.commit('hospital/updateSelectedhospital', res);
		});
	} 
};
</script>

<style></style>
