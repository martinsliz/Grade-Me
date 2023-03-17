<template>
  <div>
  <h3>Student</h3>
  <section class="details">
      <div class="flex-row space">
        <h3>
          <h3>{{ studentDetails.name }}</h3>
          <h4>{{ studentDetails.gpa}}</h4>
          <h4>{{ studentDetails.email}}</h4>
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
components: {

},
data: () => ({
studentDetails: {}
}),
mounted() {
this.getStudentDetails()
},
methods: {
  async getStudentDetails() {
    // const studentId = this.$route.params.id
    const response = await axios.get('/api/student/get-students/:id')
    console.log(response.data)
    this.studentDetails = response.data
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