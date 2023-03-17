<template>

<div>
        <form @submit="getSearchResults">
        <input :value=searchQuery @input="handleChange"/>
        <button>Search</button>
      </form>
      <h2>Students</h2>
    </div>
    <section class="search-results container-grid" v-if="!searched">
        <div class="search-results container-grid" v-for="oneStudent in allStudents" :key="oneStudent.id">
         <h3 @click="getStudentDetails(oneStudent.id)">{{ oneStudent.name }} </h3>
        </div>
    </section>

    <section class="search-results container-grid">
        <div class="search-results container-grid" v-for="results in searchResults" :key="results.id">
         <h3><router-link :to='"/student/" + results.id'>{{ results.name }}</router-link></h3>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StudentList',
  components: {

    },
    data: () => ({
        searchQuery: '',
        searchResults: [],
        searched: false,
        allStudents: [],
        selectedStudent: {}
    }),
    mounted() {
      this.getAllStudents()
    },
    methods:{
    async getAllStudents() {
        const response = await axios.get(`http://localhost:3001/api/student/get-students`)
        console.log(response.data)
        this.allStudents = response.data
      },
    async getSearchResults(e) {
        e.preventDefault()
        const response = await axios.get(`http://localhost:3001/api/student/get-students`)
        console.log(response.data)
        // this.searchResults = response.data
        this.searchResults = response.data.filter((student) => {
    return student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  })
        this.searched = true
        this.searchQuery = ''
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      },
      selectStudent() {
      },
      async getStudentDetails(id) {
        this.selectedStudent = await this.allStudents.filter((student) => {
          return student.id === id
        })[0]
        console.log(this.selectedStudent)
        // this.selectedStudent = studentArray[0]
        this.$router.push({name: 'StudentPage', params: {id:id, student: this.selectedStudent}})
      }
    }}
  
</script>