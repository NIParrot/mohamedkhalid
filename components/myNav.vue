<template>
	<div class="large" dir="rtl" role="main">
		<header>
			<nav class="navbar navbar-expand-lg navbar-light">
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav mr-5">
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/"
								>الرئيسية</nuxt-link
							>
						</li>
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/artical"
								>المقالات</nuxt-link
							>
						</li>
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/crative_activity"
								>نظام علاجي</nuxt-link
							>
						</li>
						<li class="nav-item">
							<nuxt-link class="nav-link" to="/food_activity"
								>نظام غذائي</nuxt-link
							>
						</li>
												<li class="nav-item">
							<nuxt-link class="nav-link" to="/hospital"
								> مستشفيات العزل</nuxt-link
							>
						</li>
					</ul>
					<div class="dropdown mr-auto">
						<a
							class="btn dropdown-toggle login-drop"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							تسجيل الدخول
						</a>

						<div
							class="dropdown-menu text-right"
							aria-labelledby="dropdownMenuLink"
						>
							<nuxt-link
								class="dropdown-item text-right"
								to="/doctor/"
								>دكتور</nuxt-link
							>


						
							<nuxt-link
								class="dropdown-item text-right"
								to="/dashboard/"
								>مدير</nuxt-link
							>
						</div>
					</div>
				</div>
			</nav>
			<div class="header2">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-6">
							<h1 class="heading-primary">
								<span
									class="
										heading-primary-main
										animated
										fadeInDown
									"
									>ابقي في
								</span>
								<span
									class="
										heading-primary-sub
										animated
										fadeInUp
										d-block
									"
									>المنزل</span
								>
							</h1>
							<p class="wow fadeInRight paragraph">
نوفر لك اماكن مستشفيات العزل
 								<br />
نوفر لك المساعدة الطبية اللازمة

 								<br />
							</p>
							<nuxt-link
								class="start btn_scale_hover"
								to="/patient/"
							>
								ابدا الان
							</nuxt-link>
						</div>
						<div class="col-md-6 wow fadeInLeft">
							<img
								src="@/assets/img/house.png"
								alt=""
								class="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>
<script>
export default {};
</script>
<style>
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
