<template>
  <div class="signup text-right" dir="rtl">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <card>
            <form @submit.prevent="add_edit_user">
              <div class="row">
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="الاسم بالكامل"
                    placeholder="الاسم بالكامل"
                    v-model="user.fullname"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="رقم التيليفون"
                    placeholder="رقم التيليفون"
                    v-model="user.phone"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="email"
                    label="البريد الالكتروني"
                    placeholder="mike@email.com"
                    v-model="user.email"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <label for="City" class="label">المدينه</label>
                  <select class="form-control" v-model="user.towns_id">
                    <option class="city_gov_option" v-for="city in citys" :key="city.id" :value="city.id">
                      {{ city.name }}
                    </option>
                  </select>
                </div>

                <div class="col-md-6">
                  <base-input
                    type="password"
                    label="كلمه المرور"
                    placeholder="كلمه المرور"
                    v-model="user.password"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="password"
                    label="اعاده كتابه كلمه المرور"
                    placeholder="اعاده كتابه كلمه المرور"
                    v-model="user.repassword"
                  >
                  </base-input>
                </div>
              </div>
                        <base-button native-type="submit" type="primary" class="btn-fill but" >
                            {{ submitButtonText }}
                        </base-button>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect,
  },

  data() {
    return {
      user: {
        fullname: '',
        phone: '',
        email: '',
        password: '',
        towns_id:'',
        repassword:'',
      },
            citys: '',

    }
  },
  computed: {
    userId() {
      return +this.$route.params.id
    },
    submitButtonText() {
      return this.userId ? 'Save' : 'Submit'
    },
  },
  mounted() {

    $nuxt.$axios.$get('/city/index').then((res) => {
      this.citys = res.data
    })

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/patient/index?id='+this.$route.params.id).then( res => {
        this.user.fullname= res.data.fullname;
        this.user.towns_id= res.data.towns_id;
        this.user.phone= res.data.phone;
        this.user.email= res.data.email;
        this.user.password= res.data.password;
      });

    }

  },

  methods: {
    updateProfile() {
      console.log(this.$route.params.id)
    },

    add_edit_user() {
      console.log(this.user)
      console.log(123)
       const action = this.userId
        ? { name: "user/edituser", payload: { ...this.user, id: this.userId } }
        : { name: "user/adduser", payload: {...this.user} };
      $nuxt.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push("/dashboard/user");
         console.log(123)
        }); 
    },
    getuser() {
      this.$store.dispatch('getuser', this.userId).then((user) => {
        this.user.fullname = data.fullname
        this.user.password = data.password
        this.user.towns_id = data.towns_id
        this.user.email = data.email
        this.user.phone = data.phone
        
      })
    },
  },
}
</script>
<style>
.form-group {
  text-align: left;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.form-group {
  text-align: left;
}
.txtb input,
.txtb select {
  background: #fff;
  border: none;
  padding: 2% 2%;
  height: auto;
  color: #000;
}
</style>
