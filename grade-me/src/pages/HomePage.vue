<template>
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
export default {
    name: 'HomePage',
    components: {
        ClassList,
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
        const response = await axios.get(`https://localhost:3001/&search=${this.searchQuery}`)
        this.searchResults = response.data.results
        this.searched = true
        this.searchQuery = ''
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      }

    }
}
</script>