<template>
  <div>Students</div>
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
        <p>
          {{ gameDetails.description_raw }}
        </p>
        <div>
          <router-link to="/" name="StudentForm">
            <button>ADD STUDENT</button>
          </router-link>
        </div>
      </div>
      <div>
        </div>
    </section>
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