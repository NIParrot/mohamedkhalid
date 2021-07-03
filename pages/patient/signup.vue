<template>
	<div class="signup text-right" dir="rtl">
		<div class="container">
			<form
				action=""
				class="signup-form text-right"
				@submit.prevent="add_edit_patient"
			>
				<img
					src="@/assets/img/use-img-1.png"
					alt=""
					class="img-fluid"
				/>

				<h1>تسجيل حساب جديد</h1>
				<div class="row">
					<div class="col-md-6">
						<div class="txtb">
							<input
								type="text"
								placeholder="الاسم الاول"
								v-model="patient.firstname"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input
								type="text"
								placeholder="الاسم الاخير"
								v-model="patient.lastname"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input
								type="text"
								placeholder="رقم التيليفون"
								v-model="patient.phone"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input
								type="email"
								placeholder="البريد الالكتروني"
								v-model="patient.email"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<select
								v-model="patient.towns_id"
								style="color: #000"
							>
								<option
									value="المدنه"
									disabled
									selected
									hidden
									style="color: #000 !important"
								>
									المدينه
								</option>
								<option
									class=""
									v-for="city in citys"
									:key="city.id"
									:value="city.id"
								>
									{{ city.name }}
								</option>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input type="password" placeholder="كلمه المرور" v-model="patient.password" />
						</div>
					</div>

				</div>

				<base-button native-type="submit" type="primary" class="btn-fill but logbtn2">
					{{ submitButtonText }}
				</base-button>

				<div class="bottom-text">
					هل تمتلك حساب
					<nuxt-link to="/login">تسجيل الدخول</nuxt-link>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	layout(context) {
		return 'main';
	},
	data() {
		return {
			patient: {
				firstname: '',
				lastname: '',
				phone: '',
				email: '',
				password: '',
				towns_id: '',
				repassword: '',
			},
			citys: '',
		};
	},
	computed: {
		patientId() {
			return +this.$route.params.id;
		},
		submitButtonText() {
			return this.patientId ? 'Save' : 'Submit';
		},
	},
	mounted() {
		$nuxt.$axios.$get('/city/index').then((res) => {
			this.citys = res.data;
		});
	},

	methods: {
		updateProfile() {
			console.log(this.$route.params.id);
		},

		add_edit_patient() {
			console.log(this.patient);
			console.log(123);
			const action =  { name: 'patient/addpatient', payload: { ...this.patient , fullname:(this.patient.firstname + this.patient.lastname)} };
			$nuxt.$store.dispatch(action.name, action.payload).then(() => {
				this.$router.push('/patient');
			});
		},
		
	},

	head() {
		return {
			link: [{ rel: 'stylesheet', href: '~/assets/style.scss' }],
		};
	},
};
</script>
