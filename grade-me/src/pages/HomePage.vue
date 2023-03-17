<template>
    <section>
    </section>
    <div>
        <h1 class="homeTitle">GradeMe</h1>
        <form @submit="getClassSearchResult">
            <input :value=searchValue @input="handleChange" />
            <button type="submit">Search</button>
        </form>
        <h2>Class Search Results</h2>
    </div>

    <div>

        <section class="search-results container-grid" v-for="value in searchResult" :key="value.id">
            <div class="search-results container-grid">
                <h3><router-link :to='"/class/" + value.id'>{{ value.name }}</router-link></h3>
            </div>
        </section>
    </div>

    <div class="homeContainer" v-if="!serched">
        <ClassList />
    </div>
</template>

<script>
import axios from 'axios'
import ClassList from './ClassList.vue'
export default {
    name: 'HomePage',
    components: {
        ClassList
    },
    data: () => ({
        searchValue: '',
        searchResult: [],
        serched: false
    }),
    mounted() {

    },
    methods: {
        async getClassSearchResult(e) {
            e.preventDefault()
            const response = await axios.get(`http://localhost:3001/api/class/get-classes`)
            console.log(response)
            this.searchResult = response.data.filter((oneClass) => {
                return oneClass.name.toLowerCase().includes(this.searchValue.toLowerCase())
            })
            this.serched = true
            this.searchValue = ''
        },
        handleChange(event) {
            this.searchValue = event.target.value
        }

    }
}
</script>