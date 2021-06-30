<template>
	<div class="signup text-right" dir="rtl">
		<div class="container">
			<form action="" class="signup-form text-right">
				<img
					src="@/assets/img/use-img-1.png"
					alt=""
					class="img-fluid"
				/>

				<h1>تسجيل حساب جديد</h1>
				<div class="row">
					<div class="col-md-6">
						<div class="txtb">
							<input type="text" placeholder="الاسم الاول" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input type="text" placeholder="الاسم الاخير" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input type="text" placeholder="رقم التيليفون" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input
								type="email"
								placeholder="البريد الالكتروني"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<select
								name=""
								id="gov"
								aria-label="Governorate"
								aria-labelledby="Gov"
							>
								<option
									value=""
									disabled
									selected
									class="d-none"
									>المحافظه</option
								>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<select
								name=""
								id="city"
								aria-label="City"
								aria-labelledby="city"
							>
								<option
									value=""
									disabled
									selected
									class="d-none"
									>المدينه</option
								>
							</select>
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input type="password" placeholder="كلمه المرور" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="txtb">
							<input
								type="password"
								placeholder="اعاده كتابه كلمه المرور"
							/>
						</div>
					</div>
				</div>

				<input type="submit" class="logbtn2" value="انشاء حساب" />

				<div class="bottom-text">
					هل تمتلك حساب
					<nuxt-link to="/login">تسجيل الدخول</nuxt-link>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
$('#gov').change(function() {
	$('#city').empty();
	var LeveLsSelectedId = $('#gov option:selected').val();
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://catalog.data.gov/api/3/' + LeveLsSelectedId);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			RDS = JSON.parse(this.responseText);
			AAA = Object.values(RDS);
			for (let i = 0; i < AAA.length; i++) {
				const element = AAA[i];
				$('#city').append(
					'<option value="' +
						element.id +
						'">' +
						element.name +
						'</option>'
				);
			}
		}
	};
});
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
