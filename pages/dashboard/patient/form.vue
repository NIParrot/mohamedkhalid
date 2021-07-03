<template>
  <div class="signup text-right" dir="rtl">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <form @submit.prevent="add_edit_patient">
              <div class="row">
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="الاسم بالكامل"
                    placeholder="الاسم بالكامل"
                    v-model="patient.fullname"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="رقم التيليفون"
                    placeholder="رقم التيليفون"
                    v-model="patient.phone"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="email"
                    label="البريد الالكتروني"
                    placeholder="mike@email.com"
                    v-model="patient.email"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <label for="City" class="label">المدينه</label>
                  <select class="form-control" v-model="patient.towns_id">
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
                    v-model="patient.password"
                  >
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    type="password"
                    label="اعاده كتابه كلمه المرور"
                    placeholder="اعاده كتابه كلمه المرور"
                    v-model="patient.repassword"
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
    middleware: "admin_authenticated",

  components: {
    Multiselect,
  },

  data() {
    return {
      patient: {
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
    patientId() {
      return +this.$route.params.id
    },
    submitButtonText() {
      return this.patientId ? 'Save' : 'Submit'
    },
  },
  mounted() {

    $nuxt.$axios.$get('/city/index').then((res) => {
      this.citys = res.data
    })

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/patient/index?id='+this.$route.params.id).then( res => {
        this.patient.fullname= res.data.fullname;
        this.patient.towns_id= res.data.towns_id;
        this.patient.phone= res.data.phone;
        this.patient.email= res.data.email;
        this.patient.password= res.data.password;
      });

    }

  },

  methods: {
    updateProfile() {
      console.log(this.$route.params.id)
    },

    add_edit_patient() {
      console.log(this.patient)
      console.log(123)
       const action = this.patientId
        ? { name: "patient/editpatient", payload: { ...this.patient, id: this.patientId } }
        : { name: "patient/addpatient", payload: {...this.patient} };
      $nuxt.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push("/dashboard/patient");
         console.log(123)
        }); 
    },
    getpatient() {
      this.$store.dispatch('getpatient', this.patientId).then((patient) => {
        this.patient.fullname = data.fullname
        this.patient.password = data.password
        this.patient.towns_id = data.towns_id
        this.patient.email = data.email
        this.patient.phone = data.phone
        
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
