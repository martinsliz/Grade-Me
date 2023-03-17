<template>
  <div>
    <h1> Add Student Form</h1>
    <form @submit="handleSubmit">
      <span>Full Name</span><br>
      <input :value="newName" type="text" placeholder="Enter your name" @change="handleChange" /><br>
      <!-- <span>Email</span><br>
      <input :value="newEmail" type="email" placeholder="Enter your email" @change="handleChange" /><br> -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'NewStudent',
  props: ['getStudents'],
  data: () => ({
    // newStudent: {},
    newName: '',
    // newEmail: ''

  }),
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      const response = await axios.post('http://localhost:3001/api/student/create-student', { name: this.newName })
      console.log(response)
      // const newStudent = {
      //   name: this.newName,
      //   email: this.newEmail,
      // }
      this.$router.push(`/studentlist`)
      // this.getStudents()
    },
    handleChange(e) {
      this.newName = e.target.value
      // this.newEmail = e.target.value
    }
  }

}
</script>

