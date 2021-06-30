<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <card>
                    <form @submit.prevent="add_edit_doctor"> 
                        <div class="row">
                            <div class="col-md-6">
                                <base-input type="text" label="اسم المستخدم" placeholder="اسم المستخدم" v-model="doctor.username"></base-input>
                            </div>
                            <div class="col-md-6">
                                <base-input type="text" label="الاسم" placeholder="الاسم" v-model="doctor.name"></base-input>
                            </div>
                            <div class="col-md-6">
                                <base-input type="password" label="كلمه المرور" placeholder="كلمه المرور" v-model="doctor.password"></base-input>
                            </div>
                            
                            
                            <div class="col-md-6">
                                <label for="govrnoment" class="label">المحافظه</label>
                                    <select class="form-control" v-model="doctor.states_id">
                                        <option class="city_gov_option" v-for="gov in govs" :key="gov.id" :value="gov.id">
                                            {{ gov.name }}
                                        </option>
                                    </select>
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
</template>
<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect,
  },

  data() {
    return {
      doctor: {
        name: '',
        username: '',
        password: '',
        states_id: '',
      },
      govs: '',
    }
  },
  computed: {
    doctorId() {
      return +this.$route.params.id
    },
    submitButtonText() {
      return this.doctorId ? 'Save' : 'Submit'
    },
  },
  mounted() {
    $nuxt.$axios.$get('/states/index').then((res) => {
      this.govs = res.data
    })

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/doctor/index?id='+this.$route.params.id).then( res => {
        this.doctor.name= res.data.name;
        this.doctor.username= res.data.username;
        this.doctor.password= res.data.password;
        this.doctor.states_id= res.data.states_id;
      });

    }

  },

  methods: {

    add_edit_doctor() {
      console.log(this.doctor)
      console.log(123)
       const action = this.doctorId
        ? { name: "doctor/editdoctor", payload: { ...this.doctor, id: this.doctorId } }
        : { name: "doctor/adddoctor", payload: {...this.doctor} };
      $nuxt.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push("/Dashboard/doctor/");
        }); 
    },
    getdoctor() {
      this.$store.dispatch('getdoctor', this.doctorId).then((doctor) => {
        this.doctor.name = data.name
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
