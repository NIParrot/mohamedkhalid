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
					placeholder="اسم المستخدم"
					v-model="admin.username"
				/>
			</div>

			<div class="txtb">
				<input
					type="password"
					placeholder="كلمه المرور"
					v-model="admin.password"
				/>
			</div>

			<input
				type="submit"
				class="logbtn"
				value="تسجيل الدخول"
				@click.prevent="adminLogin"
			/>
		</form>
	</div>
</template>
<script>
export default {
	middleware: 'admin_notAuthenticated',
	data() {
		return {
			admin: {
				username: '',
				password: '',
			},
			msg: '',
		};
	},
	methods: {
		adminLogin() {
			this.$axios.$post('/admin/login', this.admin).then((res) => {
				console.log(res.msg);
				console.log(res.token);
				console.log(res.key);

				if (res.msg == "login sucssfully") {
					const auth = {
						accessToken: res.token,
					};

					sessionStorage.setItem('auth', auth);
					sessionStorage.setItem('myToken', res.token);

					this.$router.push('/dashboard/governoment');
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
