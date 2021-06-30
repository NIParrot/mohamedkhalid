<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<card>
					<form @submit.prevent="add_edit_crative_activity">
						<div class="row">
							<div class="col-md-6">
								<div class="col-md-12">
									<base-input
										type="text"
										label="الاسم"
										placeholder="الاسم"
										v-model="crative_activity.name"
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
										v-model="crative_activity.notes"
									>
									</base-input>
								</div>
								<div class="col-md-12">
									<base-input
										type="text"
										label=""
										placeholder=""
										v-model="crative_activity.type"
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
									v-model="crative_activity.description"
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

	name: 'crative_activity',
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
			crative_activity: {
				name: '',
				description: '',
				img: '',
				notes: '',
				type: 'crative_activity'
			},
			url: null
		};
	},
	  mounted() {

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/artical/index?id='+this.$route.params.id).then( res => {
        this.crative_activity.name= res.data.name;
        this.crative_activity.description= res.data.description;
        this.crative_activity.img= res.data.img;
        this.crative_activity.notes= res.data.notes;
        this.crative_activity.type= res.data.type;
      });

    }

  },

	methods: {
		onFileChange(e) {
			const file = e.target.files[0];
			this.url = URL.createObjectURL(file);
			this.crative_activity.img = this.$refs.file.files[0];
			console.log(this.crative_activity.img);
		},
		add_edit_crative_activity() {
			const crative_activityParams = new FormData();
			crative_activityParams.append('name', this.crative_activity.name);
			crative_activityParams.append('description', this.crative_activity.description);
			crative_activityParams.append('img', this.crative_activity.img);
			crative_activityParams.append('notes', this.crative_activity.notes);
			crative_activityParams.append('type', this.crative_activity.type);
			if(this.articalId){
							crative_activityParams.append('id', this.articalId);

			}
			const action = this.articalId
				? {
						name: 'artical/editartical',
						payload: crative_activityParams
				  }
				: { name: 'artical/addartical', payload: crative_activityParams };

			
			

			this.$store.dispatch(action.name, action.payload).then(() => {
				this.$router.push('/doctor/crative_activity');
			});
		},
		getartical() {
			this.$store.dispatch('getartical', this.articalId).then(artical => {
				this.crative_activity.name = data.name;
				this.crative_activity.description = data.description;
				this.crative_activity.img = data.img;
				this.crative_activity.notes = data.notes;
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
