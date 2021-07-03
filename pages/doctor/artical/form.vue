<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<card>
					<form @submit.prevent="add_edit_artical">
						<div class="row">
							<div class="col-md-6">
								<div class="col-md-12">
									<base-input
										type="text"
										label="الاسم"
										placeholder="الاسم"
										v-model="artical.name"
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
										v-model="artical.notes"
									>
									</base-input>
								</div>
								<div class="col-md-12">
									<base-input
										type="text"
										label=""
										placeholder=""
										v-model="artical.type"
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
									v-model="artical.description"
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
  	middleware: 'doctor_authenticated',

	name: 'artical',
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
			artical: {
				name: '',
				description: '',
				img: '',
				notes: '',
				type: 'artical'
			},
			url: null
		};
	},
	  mounted() {

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/artical/index?id='+this.$route.params.id).then( res => {
        this.artical.name= res.data.name;
        this.artical.description= res.data.description;
        this.artical.img= res.data.img;
        this.artical.notes= res.data.notes;
        this.artical.type= res.data.type;
      });

    }

  },

	methods: {
		onFileChange(e) {
			const file = e.target.files[0];
			this.url = URL.createObjectURL(file);
			this.artical.img = this.$refs.file.files[0];
			console.log(this.artical.img);
		},
		add_edit_artical() {
			const articalParams = new FormData();
			articalParams.append('name', this.artical.name);
			articalParams.append('description', btoa(unescape(encodeURIComponent(this.artical.description))));
			articalParams.append('img', this.artical.img);
			articalParams.append('notes', this.artical.notes);
			articalParams.append('type', this.artical.type);
			if(this.articalId){
							articalParams.append('id', this.articalId);

			}
			const action = this.articalId
				? {
						name: 'artical/editartical',
						payload: articalParams
				  }
				: { name: 'artical/addartical', payload: articalParams };

			
			

			this.$store.dispatch(action.name, action.payload).then(() => {
				this.$router.push('/doctor/artical');
			});
		},
		getartical() {
			this.$store.dispatch('getartical', this.articalId).then(artical => {
				this.artical.name = data.name;
				this.artical.description = data.description;
				this.artical.img = data.img;
				this.artical.notes = data.notes;
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
