<template>
  <div>
  <h3>Students</h3>
  <section class="details">
      <div class="flex-row space">
        <h3>
          {{ studentDetails.name }}
          {{ studentDetails.email }}
          {{ studentDetails.class }}
          {{ studentDetails.gpa }}
        </h3>
      </div>
      <div>
        <router-link to="/" name="StudentForm">
          <button>ADD STUDENT</button>
        </router-link>
      </div>
    </section>
      

      </div>
      <div>
        </div>
</template>


<script>
import axios from 'axios'

export default {
name: 'StudentPage',
components: {

},
data: () => ({
name: "",
email: "",
gpa: null,

}),
mounted() {
this.studentDetails()
},
methods: {
  async getStudentDetails() {
    const studentId = this.$route.params.id
    const response = await axios.get(`/api/student/${studentId}`)
    this.studentById = response.data.results
    //this.gpa
  }
  
}
}
</script>