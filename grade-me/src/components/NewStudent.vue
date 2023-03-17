<template>
  <div>
    <form @submit="handleSubmit">
      <span>Full Name</span><br>
      <input 
        v-model="name"
        type="text"
        placeholder="Enter your name" 
      /><br>
      <span>Email</span><br>
      <input 
        v-model="email"
        type="email"
        placeholder="Enter your email" 
      /><br>
      <span>GPA</span><br>
      <input 
        v-model="gpa"
        type="gpa"
        placeholder="Enter your GPA" 
      /><br>

      <input 
        class="submit" 
        type="submit" 
        value="Submit"
      >
    </form>
    <div>
      <button>Add</button>
      <!-- on submit handleSubmit -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    name: 'NewStudent',
    props: ['getStudents'],
    data: () => ({
     newStudent: {}

    }),
    methods: {
      async handleSubmit(e) {
        e.preventDefault()
        const response = await axios.post('http://localhost:3001/api/student/create-student', newStudent)
        console.log(response)
        const newStudent = {
          name: this.name,
          email: this.email,
          gpa: this.gpa
        }
          this.getStudents()

      },
      handleChange(e) {
        this[e.target.name] = e.target.value

      }
    }

  }
</script>

