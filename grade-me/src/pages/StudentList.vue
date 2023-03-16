<template>
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
      this.allStudents = response.data.results
    },
    // getStudentDetails() {
    //   this.$router.push(``)
    // }

  }
}


</script>