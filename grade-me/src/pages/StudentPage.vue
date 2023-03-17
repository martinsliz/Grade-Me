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
    // this.studentById = response.data.results
    //this.gpa
  }
  
}
}
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.flex-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.space {
  justify-content: space-between;
}

.student-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
}
.student-info {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.info-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
</style>