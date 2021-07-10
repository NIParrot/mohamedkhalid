<template>
	<div class="login text-right" dir="rtl" role="main">
		<form action="" class="login-form">
			<img src="@/assets/img/use-img-1.png" alt="" class="img-fluid" />
			<h1>تسجيل الدخول</h1>
      <div v-if="msg !== ''" class="alert alert-danger" role="alert">
        {{ msg }}
      </div>
			<div class="txtb">
				<input
					type="text"
					placeholder="رقم المستخدم"
					v-model="patient.username"
				/>
			</div>

			<div class="txtb">
				<input
					type="password"
					placeholder="كلمه المرور"
					v-model="patient.password"
				/>
			</div>

			<input
				type="submit"
				class="logbtn"
				value="تسجيل الدخول"
				@click.prevent="patientLogin"
			/>
					<nuxt-link to="/patient/signup" >ليس لديك حساب بعد</nuxt-link>

		</form>

	</div>
</template>
<script>
export default {
	middleware: 'pa_notAuthenticated',
	data() {
		return {
			patient: {
				username: '',
				password: '',
			},
			msg: '',
		};
	},
	methods: {
		patientLogin() {
			this.$axios.$post('/patient/login', this.patient).then((res) => {
				console.log(res.msg);
				console.log(res.token);
				console.log(res.key);

				if (res.msg == "login sucssfully") {
					const auth = {
						accessToken: res.token,
					};

					sessionStorage.setItem('auth', auth);
					sessionStorage.setItem('myToken', res.token);
					sessionStorage.setItem('myid', res.p_id);

					this.$router.push('/patient/reports');
				}

				this.msg = res.msg;
			});
		},
	},

	  layout: "empty"
,
	head() {
		return {
			link: [{ rel: 'stylesheet', href: '~/assets/style.scss' }],
		};
	},
};
</script>
