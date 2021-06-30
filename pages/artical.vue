<template>
<div >
	<div>
		<div v-for="artical in articals" :key="artical.id" class="drt">
			<div class="container">
      <!--
       v-on="counter++" v-if="counter%2=0"
        :class="{'light-orange': $counter % 2 === 0, 'dirodd': $counter % 2 !== 0 }"
      -->
      <div>
				<div class="row">       
					<div class="col-md-6">
						<h1 class="text-center" style="color: #000">{{ artical.name }}</h1>
            <h4 class="float-left" style="color:#000">{{artical.notes}}</h4>
            <h4 class="float-right" style="color:#000">{{artical.update_at}}</h4>
            <br>
            <div class="clearfix"></div>
            <code style="color:#000" class="text-center mt-5">{{artical.description}}</code>
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
		this.$axios.$get('/artical/index?type=artical').then((res) => {
			this.articals = res.data;
    // increase(index){
    //   this.counter++
    // }
  });
  
    console.log(count)
	},
    //   methods: {
    //     loadMore() {
    //         console.log("Adding 10 more data results");
    //         console.log(this.page);
    //         this.busy = true;
    //         axios.get("/artical/index?type=artical").then(response => {
    //             const append = response.data.slice(
    //                 this.articals.length,
    //                 this.articals.length + this.limit
    //             );
    //             console.log(this.articals.length, ' & ', (this.articals.length + this.limit));
    //             this.articals = this.articals.concat(append);
    //             this.busy = false;
    //             this.page++;
    //         });
    //     }
    // },
    // created() {
    //     this.loadMore();
    // }

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