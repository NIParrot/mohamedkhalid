<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<card>
					<form @submit.prevent="add_edit_Gov">
						<div class="row">
							<div class="col-md-12 aa">
								<base-input
									type="text"
									label="المحافظه"
									placeholder="المحافظه"
									v-model="gov.name"
								>
								</base-input>

								<base-button
									native-type="submit"
									type="primary"
									class="btn-fill but"
								>
									{{ submitButtonText }}
								</base-button>
							</div>
						</div>
					</form>
				</card>
			</div>
		</div>
	</div>
</template>
<style scoped>
.form-group {
	text-align: right !important;
}
</style>
<script>
export default {
	  middleware: "admin_authenticated",

	data() {
		return {
			gov: {
				name: ''
			}
		};
	},
	mounted() {
		if (!isNaN(this.$route.params.id)) {
			$nuxt.$axios
				.$get('/states/index?id=' + this.$route.params.id)
				.then(res => {
					this.gov.name = res.data.name;
				});
		}
	},
	computed: {
		govId() {
			return +this.$route.params.id;
		},
		submitButtonText() {
			return this.govId ? 'Save' : 'Submit';
		}
	},
	methods: {
		updateProfile() {
			console.log(this.$route.params.id);
		},

		add_edit_Gov() {
			const action = this.govId
				? {
						name: 'gov/editgov',
						payload: { ...this.gov, id: this.govId }
				  }
				: { name: 'gov/addgov', payload: { ...this.gov } };
			$nuxt.$store.dispatch(action.name, action.payload).then(() => {
				this.$router.push('/Dashboard/governoment/');
			});
		},
		getgov() {
			this.$store.dispatch('getgov', this.govId).then(gov => {
				this.gov.name = data.name;
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
