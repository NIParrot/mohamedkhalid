<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<card>
					<form @submit.prevent="add_edit_report">
						<div class="row">
							<div class="col-md-6">
								<div class="col-md-12">
								<label for="govrnoment" class="label"
									>المحافظه</label
								>
								<select
									class="form-control"
									v-model="report.states_id"
								>
									<option
										class="user_option"
										v-for="user in users"
										:key="user.id"
										:value="user.id"
									>
										{{ user.fullname }}
									</option>
								</select>
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
										label="النتيجه"
										placeholder="النتيجه"
										v-model="report.result"
									>
									</base-input>
								</div>
								<div class="col-md-12">
									<base-input
										type="text"
										label=""
										placeholder=""
										v-model="report.type"
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
									v-model="report.description"
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

	name: 'report',
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
			report: {
				description: '',
				img: '',
				result: '',
				patients_id: '',
			},
			users: '',
			valid: false,
			addreportLoading: false,
			url: null
		};
	},
	  mounted() {
		$nuxt.$axios.$get('/patient/index').then(res => {
			this.users = res.data;
		});

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/reports/index?id='+this.$route.params.id).then( res => {
        this.report.description= res.data.description;
        this.report.img= res.data.img;
        this.report.result= res.data.result;
        this.report.patients_id= res.data.patients_id;
      });

    }

  },

	methods: {
		onFileChange(e) {
			const file = e.target.files[0];
			this.url = URL.createObjectURL(file);
			this.report.img = this.$refs.file.files[0];
			console.log(this.report.img);
		},
		add_edit_report() {
			const reportParams = new FormData();
			reportParams.append('description', this.report.description);
			reportParams.append('img', this.report.img);
			reportParams.append('resulat', this.report.resulat);
			reportParams.append('patients_id', this.report.patients_id);
			if(this.reportId){
							reportParams.append('id', this.reportId);

			}
			const action = this.reportId
				? {
						name: 'report/editreport',
						payload: reportParams
				  }
				: { name: 'report/addreport', payload: reportParams };

			
			

			this.$store.dispatch(action.name, action.payload).then(() => {
				this.$router.push('/doctor/report');
			});
		},
		getreport() {
			this.$store.dispatch('getreport', this.reportId).then(report => {
				this.report.name = data.name;
				this.report.description = data.description;
				this.report.img = data.img;
				this.report.notes = data.notes;
			});
		}
	},
	computed: {
		reportId() {
			return +this.$route.params.id;
		},
		submitButtonText() {
			return this.reportId ? 'Save' : 'Submit';
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
.user_option{
	color: black;
}
</style>
