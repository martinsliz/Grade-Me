<template>
    <div>
        <form @submit="getSearchResults">
        <input :value=searchQuery @input="handleChange"/>
        <button>Search</button>
      </form>
      <h2>Search Results</h2>
    </div>

    <section class="search-results container-grid" v-for="results in searchResults" :key="results.id">
        <div class="search-results container-grid" >
            <h1 class="homeTitle">GradeMe</h1>
            <StudentList :results="results" @click="selectStudent(results.id)"/>
        </div>
    </section>

    <div class="homeContainer">
        <h1 class="homeTitle">GradeMe</h1>
        <ClassList />
    </div>
</template>

<script>
import axios from 'axios'
import ClassList from './ClassList.vue'
import StudentList from './StudentList.vue'
export default {
    name: 'HomePage',
    components: {
        ClassList,
        StudentList
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
        console.log(response)
        this.searchResults = response.data.filter((student) => {
    return student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  })
        this.searched = true
        this.searchQuery = ''
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      }

    }
}
</script>