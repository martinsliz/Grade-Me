<template>
  <div>
  <h2>Student</h2>
  <section class="details">
      <div class="flex-row space" v-if="student">
        <h3>
          <h3>{{ student.name }}</h3>
          <h4>{{ student.gpa}}</h4>
          <h4>{{ student.email}}</h4>
        </h3>
      </div>
      <div>
        <router-link to="/addstudent/:data" name="NewStudent">
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

data: () => ({
student: null
}),
mounted() {
this.getStudentDetails()
},
methods: {
  async getStudentDetails() {
    const response = await axios.get(`http://localhost:3001/api/student/get-students/${this.$route.params.id}`)
    // console.log(response)
    this.student = response.data
  }
}

}
</script>