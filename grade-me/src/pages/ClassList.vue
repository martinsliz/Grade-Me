<template>
    <div class="classListContainer">
        <h1 class="classTitle">Classes</h1>
        <button @click="shareData">Add Class</button>
        <!-- <router-link class="button" to="/addclass" :firstclass="firstclass">Add Class</router-link> -->
        <!-- <div class="classListResults" :key="class.id" v-for="class in classes">
            <router-link to=`/class/{{class.id}}`>{{ class.name }}</router-link>
        </div> -->
    </div>
</template>
<script>
// import axios from 'axios'

export default {
    name: 'ClassList',
    components: {},
    data: () => ({
        classes: [],
        firstclass: 'science',
    }),
    mounted() {
        // this.getClasses()
    },
    methods: {
        // async getClasses() {
        //     const res = await axios.get(`http://localhost:3001/api/`)
        //     this.classes = res.data
        //     console.log(res)
        // }
        shareData() {
            this.$router.push({ name: 'AddClass', params: { data: this.firstclass } })
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