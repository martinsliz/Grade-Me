<template>
    <div class="classListContainer">
        <router-link class="button" to="/addclass" :getClasses="getClasses">Add Class</router-link>
        <h1 class="classTitle">Classes List</h1>
        <div class="classListResults" :key="classe.id" v-for="classe in classes">
            <router-link :to='"/class/" + classe.id'>{{ classe.name }}</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'ClassList',
    components: {},
    data: () => ({
        classes: [],
    }),
    mounted() {
        this.getClasses()
    },
    methods: {
        async getClasses() {
            const res = await axios.get(`http://localhost:3001/api/class/get-classes`)
            this.classes = res.data
            console.log(res)
        }
    }
}
</script>

<style>
.button {
    display: inline-block;
    margin: 1em 0;
    padding: 0.5em 1em;
    background-color: #4CAF50;
    color: white;
    border-radius: 0.25em;
    text-decoration: none;
    cursor: pointer;
}

.button:hover {
    background-color: #3e8e41;
}
</style>