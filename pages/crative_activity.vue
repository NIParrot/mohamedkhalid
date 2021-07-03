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
						<li class="nav-item active">
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
							<nuxt-link class="dropdown-item text-right" to="/doctor/" >دكتور</nuxt-link>
							<nuxt-link class="dropdown-item text-right" to="/patient/">مريض</nuxt-link>
							<nuxt-link class="dropdown-item text-right"  to="/dashboard/"
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
								نوفرلك معرفه نتائج تحليل و توفير برنامج للتعافي
								<br />
								او تساعدك في وقايه عائلتك
							</p>
							<nuxt-link class="start btn_scale_hover" to="/patient/">
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

	<div>
		<div v-for="artical in articals" :key="artical.id" class="drt">
			<div class="container">
      <div>
				<div class="row">       
					<div class="col-md-6">
						<h1 class="text-center" style="color: #000">{{ artical.name }}</h1>
            <h4 class="float-left" style="color:#000">{{artical.notes}}</h4>
            <h4 class="float-right" style="color:#000">{{artical.update_at}}</h4>
            <br>
            <div class="clearfix"></div>
  <div v-html="this.renderHtmlCkeditor(artical.description)"></div>
  					</div>
          <div class="col-md-6">
            <img :src="'https://coronavirous.ninameserver.xyz/storage/'+artical.img" alt="">
          </div>
				</div>
			</div>
      </div>
			<br />
		</div>
</div>
	</div>
</template>

<script>
import axios from "axios"
export default {
	layout(context) {
		return 'main';
	},
	data() {
		return {
      counter : 0,
			articals: '',
       limit: 5,
        busy: false,
        page: 1
		};
	},
	mounted() {
    let count = 0
		this.$axios.$get('/artical/index?type=crative_activity').then((res) => {
			this.articals = res.data;
  });
  
	},

  methods:{
    renderHtmlCkeditor(data){
      return decodeURIComponent(escape(window.atob(data)));
    }
  }


};
</script>

<style>
.drt{
      margin-bottom: 5%;
}
.drt:nth-child(odd){
    direction: rtl;
}
.drt:nth-child(even){
    direction: ltr;
}
</style>