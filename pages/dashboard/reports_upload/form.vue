<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <card>
    <v-form v-model="valid" @submit.prevent="gov_form">
            <div class="row">
              <div class="col-md-6">
                <div class="col-md-12">
                  <base-input
                    type="text"
                    label="Company"
                    placeholder="Company"
                    v-model="user.company"
                  >
                  </base-input>
                </div>
                <div class="col-md-12  mt-3 mb-3">
                  <div class="custom-file mb-3 mt-4">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                      name="filename"
                      @change="onFileChange"
                      ref="file"
                    />
                    <label class="custom-file-label text-left" for="customFile"
                      >Choose file</label
                    >
                  </div>
                </div>

                <div class="col-md-12">
                  <base-input
                    type="text"
                    label="ملاحظات"
                    placeholder="ملاحظات"
                    v-model="user.company"
                  >
                  </base-input>
                </div>
                <div class="col-md-12">
                  <base-input
                    type="text"
                    label=""
                    placeholder=""
                    v-model="user.company"
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
                <ckeditor
                  v-model="editorData"
                  :config="editorConfig"
                  class="ckeditor"
                ></ckeditor>
              </div>
            </div>
                                  <v-btn
      type="submit"
      color="deep-purple accent-4"
      :dark="valid"
      :loading="addPostLoading"
      :disabled="!valid"
      class="but"
    >
      {{ submitButtonText }}
    </v-btn>

          </v-form>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import CKEditor from 'ckeditor4-vue'
Vue.use(CKEditor)
export default {
  name: 'user',
  data() {
    return {
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        language: 'en',
        uiColor: '#AADC6E',
        autoGrow_minHeight: 60,
        autoGrow_maxHeight: 90,
        autoGrow_bottomSpace: 50,
        magicline_color: '#000',
      },
    }
  },

  data() {
    return {
      sidebarBackground: 'vue', //vue|blue|orange|green|red|primary

      user: {
        company: 'Creative Code Inc.',
      },
                  valid: false,
      addPostLoading: false,

      url: null,
    }
  },
      computed: {
    postId() {
      return +this.$route.params.id;
    },
    submitButtonText() {
      return this.postId ? "Save" : "Submit";
    }
  },

  methods: {
        submit() {
      this.addPostLoading = true;
      const action = this.postId
        ? { name: "editPost", payload: { ...this.form, id: this.postId } }
        : { name: "addPost", payload: this.form };
      this.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push("/");
        })
        .finally(() => {
          this.addPostLoading = false;
        });
    },
    getPost() {
      this.$store.dispatch("getPost", this.postId).then(post => {
        this.form.title = post.title;
        this.form.body = post.body;
      });
    },

    handleFileUpload() {
      this.user.image = this.$refs.file.files[0]
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
      this.user.image = this.$refs.file.files[0]
    },
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user))
    },
  },
  mounted: () => {
    $('.custom-file-input').on('change', function () {
      var fileName = $(this).val().split('\\').pop()
      $(this).siblings('.custom-file-label').addClass('selected').html(fileName)
    })
    //     console.log(123456789);
    //     const file_img = document.getElementById("file");
    //     file_img.change(function (event) {
    //     console.log(file_img);
    //     console.log(event);
    //  /*  const reader = new FileReader();
    //   reader.onload = function () {
    //     const output = document.getElementById("output");
    //     output.src = reader.result;
    //   };
    //   reader.readAsDataURL(event.target.files[0]); */
    // });
  },
}
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
