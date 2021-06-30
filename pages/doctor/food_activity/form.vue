<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<card>
					<form @submit.prevent="add_edit_food_activity">
						<div class="row">
							<div class="col-md-6">
								<div class="col-md-12">
									<base-input
										type="text"
										label="الاسم"
										placeholder="الاسم"
										v-model="food_activity.name"
									>
									</base-input>
								</div>
								<div class="col-md-12 mt-3 mb-3">
									<div class="custom-file mb-3 mt-4">
										<input
											type="file"
											class="custom-file-input"
											id="customFile"
											name="filename"
											@change="onFileChange"
											ref="file"
										/>
										<label
											class="custom-file-label text-left"
											for="customFile"
											>Choose file</label
										>
									</div>
								</div>

								<div class="col-md-12">
									<base-input
										type="text"
										label="الملاحظات"
										placeholder="الملاحظات"
										v-model="food_activity.notes"
									>
									</base-input>
								</div>
								<div class="col-md-12">
									<base-input
										type="text"
										label=""
										placeholder=""
										v-model="food_activity.type"
										hidden
									>
									</base-input>
								</div>
								<div class="col-md-12">
									<div id="preview">
										<img v-if="url" :src="url" />
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<label for="">الوصف</label>
								<ckeditor
									v-model="food_activity.description"
									:config="editorConfig"
									class="ckeditor"
								></ckeditor>
							</div>
						</div>
						<base-button
							native-type="submit"
							type="primary"
							class="btn-fill but"
						>
							{{ submitButtonText }}
						</base-button>
					</form>
				</card>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';
Vue.use(CKEditor);
export default {
	      layout: 'doctor',

	name: 'food_activity',
	mounted: () => {
		$('.custom-file-input').on('change', function() {
			var fileName = $(this)
				.val()
				.split('\\')
				.pop();
			$(this)
				.siblings('.custom-file-label')
				.addClass('selected')
				.html(fileName);
		});
	},

	data() {
		return {
			editorConfig: {
				language: 'en',
				uiColor: '#AADC6E',
				autoGrow_minHeight: 60,
				autoGrow_maxHeight: 90,
				autoGrow_bottomSpace: 50,
				magicline_color: '#000'
			},
			sidebarBackground: 'vue', //vue|blue|orange|green|red|primary
			food_activity: {
				name: '',
				description: '',
				img: '',
				notes: '',
				type: 'food_activity'
			},
			url: null
		};
	},
	  mounted() {

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/artical/index?id='+this.$route.params.id).then( res => {
        this.food_activity.name= res.data.name;
        this.food_activity.description= res.data.description;
        this.food_activity.img= res.data.img;
        this.food_activity.notes= res.data.notes;
        this.food_activity.type= res.data.type;
      });

    }

  },

	methods: {
		onFileChange(e) {
			const file = e.target.files[0];
			this.url = URL.createObjectURL(file);
			this.food_activity.img = this.$refs.file.files[0];
			console.log(this.food_activity.img);
		},
		add_edit_food_activity() {
			const food_activityParams = new FormData();
			food_activityParams.append('name', this.food_activity.name);
			food_activityParams.append('description', btoa(unescape(encodeURIComponent(this.food_activity.description))));
			food_activityParams.append('img', this.food_activity.img);
			food_activityParams.append('notes', this.food_activity.notes);
			food_activityParams.append('type', this.food_activity.type);
			if(this.articalId){
							food_activityParams.append('id', this.articalId);

			}
			const action = this.articalId
				? {
						name: 'artical/editartical',
						payload: food_activityParams
				  }
				: { name: 'artical/addartical', payload: food_activityParams };

			
			

			this.$store.dispatch(action.name, action.payload).then(() => {
				this.$router.push('/doctor/food_activity');
			});
		},
		getartical() {
			this.$store.dispatch('getartical', this.articalId).then(artical => {
				this.food_activity.name = data.name;
				this.food_activity.description = data.description;
				this.food_activity.img = data.img;
				this.food_activity.notes = data.notes;
			});
		}
	},
	computed: {
		articalId() {
			return +this.$route.params.id;
		},
		submitButtonText() {
			return this.articalId ? 'Save' : 'Submit';
		}
	}
};
</script>
<style>
#preview {
	display: flex;
	justify-content: center;
	align-items: center;
}

#preview img {
	max-width: 100%;
	max-height: 500px;
}
</style>
