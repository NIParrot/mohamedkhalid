<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<card>
					<form @submit.prevent="add_edit_report">
						<div class="row">
							<div class="col-md-6">
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
	    layout: 'patient',
  	middleware: 'pa_authenticated',

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
			},
			users: '',
			valid: false,
			addreportLoading: false,
			url: null
		};
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
			reportParams.append('description', btoa(unescape(encodeURIComponent(this.report.description))));
			reportParams.append('img', this.report.img);
			reportParams.append('patients_id', sessionStorage.getItem('myid'));

			console.log( btoa(unescape(encodeURIComponent(this.report.description))));
			console.log( this.report.img);
			console.log( sessionStorage.getItem('myid'));

			this.$store.dispatch('report/addreport', reportParams).then(() => {
				this.$router.push('/patient/reports');
			});
		},

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
