<template>
  <div class="student-list">
    <div class="image-wrapper">
      <!-- <img :src="results.background_image" /> -->
    </div>
    <div class="info-wrapper flex-col">
      <h3>
        {{ results.name }}
      </h3>
      <h4>{{ results.gpa}}</h4>
      <h4>{{ results.email}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StudentList',
    props: ['results'],
    methods: {
      // selectStudent(id) {
      //   this.$router.push('/student/:id')
      }
    }
  
</script>


<!-- <template>
    <div>Student List</div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'StudentList',
  components: {

  },
  data: () => ({
    name: "",
    email: "",
    gpa: null,
  }),
  mounted() {

  },
  methods: {
    async getAllStudents() {
      const response = await axios.get('/api/student/get-students')
      console.log(response)
      this.allStudents = response.data.results
    },
    // getStudentDetails() {
    //   this.$router.push(``)
    // }

  }
}


</script> -->