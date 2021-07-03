<template>
	<div class="login text-right" dir="rtl" role="main">
		<form action="" class="login-form">
			<img src="@/assets/img/use-img-1.png" alt="" class="img-fluid" />
			<h1>تسجيل الدخول</h1>

			<div class="txtb">
				<input
					type="text"
					placeholder="اسم المستخدم"
					v-model="doctor.username"
				/>
			</div>

			<div class="txtb">
				<input
					type="password"
					placeholder="كلمه المرور"
					v-model="doctor.password"
				/>
			</div>

			<input
				type="submit"
				class="logbtn"
				value="Login"
				@click.prevent="doctorLogin"
			/>
		</form>
	</div>
</template>
<script>
export default {
	middleware: 'doctor_notAuthenticated',
	data() {
		return {
			doctor: {
				username: '',
				password: '',
			},
			msg: '',
		};
	},
	methods: {
		doctorLogin() {
			this.$axios.$post('/doctor/login', this.doctor).then((res) => {
				console.log(res.msg);
				console.log(res.token);
				console.log(res.key);

				if (res.msg == "login sucssfully") {
					const auth = {
						accessToken: res.token,
					};

					sessionStorage.setItem('auth', auth);
					sessionStorage.setItem('myToken', res.token);

					this.$router.push('/doctor/artical');
				}

				this.msg = res.msg;
			});
		},
	},

	layout(context) {
		return 'main';
	},
	head() {
		return {
			link: [{ rel: 'stylesheet', href: '~/assets/style.scss' }],
		};
	},
};
</script>
