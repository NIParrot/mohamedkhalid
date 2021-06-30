<template>
	<div class="login text-right" dir="rtl" role="main">
		<form action="" class="login-form">
			<img src="@/assets/img/use-img-1.png" alt="" class="img-fluid" />
			<h1>تسجيل الدخول</h1>

			<div class="txtb">
				<input type="text" placeholder="اسم المستخدم" />
			</div>

			<div class="txtb">
				<input type="password" placeholder="كلمه المرور" />
			</div>

			<input type="submit" class="logbtn" value="Login" />
		</form>
	</div>
</template>
<script>
export default {
	layout(context) {
		return 'main';
	},
	head() {
		return {
			link: [{ rel: 'stylesheet', href: '~/assets/style.scss' }]
		};
	}
};
</script>
