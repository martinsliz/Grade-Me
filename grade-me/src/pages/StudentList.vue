<template>
  <div>
    <form @submit="getSearchResults">
      <input :value=searchQuery @input="handleChange" />
      <button>Search</button>
    </form>
    <h2>Students</h2>
  </div>

  <section class="search-results container-grid">
    <div class="search-results container-grid" v-for="results in searchResults" :key="results.id"
      @click="selectStudent()">
      <h3>{{ results.name }}</h3>
      <h4>{{ results.gpa }}</h4>
      <h4>{{ results.email }}</h4>
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
    searched: false
  }),
  mounted() {
  },
  methods: {
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
      this.$router.push('/student/:id')
    }
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