<template>
    <section>
        <NavBar />
    </section>
    <div>
        <form @submit="getSearchResults">
        <input :value=searchQuery @input="handleChange"/>
        <button>Search</button>
      </form>
      <h2>Search Results</h2>
    </div>

    <div class="homeContainer">
        <h1 class="homeTitle">GradeMe</h1>
        <ClassList />
    </div>
</template>

<script>
import axios from 'axios'
import ClassList from './ClassList.vue'
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'HomePage',
    components: {
        NavBar,
        ClassList
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