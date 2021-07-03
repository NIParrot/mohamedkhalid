<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <card>
                    <form @submit.prevent="add_edit_hospital"> 
                        <div class="row">
                            <div class="col-md-6">
                                <base-input type="text" label="الاسم" placeholder="الاسم" v-model="hospital.name"></base-input>
                            </div>
                            
                            
                            <div class="col-md-6">
                                <label for="City" class="label">المدينه</label>
                                    <select class="form-control" v-model="hospital.towns_id">
                                        <option class="city_gov_option" v-for="city in citys" :key="city.id" :value="city.id">
                                            {{ city.name }}
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
    middleware: "admin_authenticated",

  components: {
    Multiselect,
  },

  data() {
    return {
      hospital: {
        name: '',
        towns_id: '',
      },
      citys: '',
    }
  },
  computed: {
    hospitalId() {
      return +this.$route.params.id
    },
    submitButtonText() {
      return this.hospitalId ? 'Save' : 'Submit'
    },
  },
  mounted() {
    $nuxt.$axios.$get('/city/index').then((res) => {
      this.citys = res.data
    })

    if(!isNaN(this.$route.params.id)){
    $nuxt.$axios.$get('/hospital/index?id='+this.$route.params.id).then( res => {
        this.hospital.name= res.data.name;
        this.hospital.towns_id= res.data.towns_id;
      });

    }

  },

  methods: {
    updateProfile() {
      console.log(this.$route.params.id)
    },

    add_edit_hospital() {
      console.log(this.hospital)
      console.log(123)
       const action = this.hospitalId
        ? { name: "hospital/edithospital", payload: { ...this.hospital, id: this.hospitalId } }
        : { name: "hospital/addhospital", payload: {...this.hospital} };
      $nuxt.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push("/dashboard/hospital");
        }); 
    },
    gethospital() {
      this.$store.dispatch('gethospital', this.hospitalId).then((hospital) => {
        this.hospital.name = data.name
        this.hospital.towns_id = data.towns_id
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
