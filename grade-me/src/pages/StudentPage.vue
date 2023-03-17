<template>
  <div>
  <h3>Students</h3>
  <section class="details">
      <div class="flex-row space">
        <StudentList :results="results" />
        <h3>
          <h3>{{ results.name }}</h3>
          <h4>{{ results.gpa}}</h4>
          <h4>{{ results.email}}</h4>
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
import StudentList from './StudentList.vue'

export default {
name: 'StudentPage',
components: {
  StudentList

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
    console.log(response)
    this.studentById = response.data.results
    //this.gpa
  }
  
}
}
</script>