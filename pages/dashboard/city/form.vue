<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<card>
					<form @submit.prevent="add_edit_City">
						<div class="row">
							<div class="col-md-6">
								<base-input
									type="text"
									label="المدينه"
									placeholder="المدينه"
									v-model="city.name"
								></base-input>
							</div>

							<div class="col-md-6">
								<label for="govrnoment" class="label"
									>المحافظه</label
								>
								<select
									class="form-control"
									v-model="city.states_id"
								>
									<option
										class="city_gov_option"
										v-for="gov in govs"
										:key="gov.id"
										:value="gov.id"
									>
										{{ gov.name }}
									</option>
								</select>
							</div>
						</div>
						<base-button
							native-type="submit"
							type="primary"
							class="btn-fill but"
						>
							{{ submitButtonText }}
						</base-button>
					</form>
				</card>
			</div>
		</div>
	</div>
</template>
<script>
import Multiselect from 'vue-multiselect';

export default {
	components: {
		Multiselect
	},

	data() {
		return {
			city: {
				name: '',
				states_id: ''
			},
			govs: ''
		};
	},
	computed: {
		cityId() {
			return +this.$route.params.id;
		},
		submitButtonText() {
			return this.cityId ? 'Save' : 'Submit';
		}
	},
	mounted() {
		$nuxt.$axios.$get('/states/index').then(res => {
			this.govs = res.data;
		});

		if (!isNaN(this.$route.params.id)) {
			console.log('has param');
			$nuxt.$axios
				.$get('/city/index?id=' + this.$route.params.id)
				.then(res => {
					this.city.name = res.data.name;
					this.city.states_id = res.data.states_id;
				});
		}
	},

	methods: {
		add_edit_City() {
			const action = this.cityId
				? {
						name: 'city/editcity',
						payload: { ...this.city, id: this.cityId }
				  }
				: { name: 'city/addcity', payload: { ...this.city } };
			$nuxt.$store.dispatch(action.name, action.payload).then(() => {
				this.$router.push('/dashboard/city');
			});
		},
		getcity() {
			this.$store.dispatch('getcity', this.cityId).then(city => {
				this.city.name = data.name;
				this.city.states_id = data.states_id;
			});
		}
	}
};
</script>
<style>
.form-group {
	text-align: left;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
