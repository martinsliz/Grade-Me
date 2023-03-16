<template>
    <div class="classListContainer">
        <h1 class="classTitle">Classes</h1>
        <router-link class="addClassButton" to="/addclass">Add Class</router-link>
        <!-- <div class="classListResults" :key="class.id" v-for="class in classes"> -->
        <!-- <h1 class="classTitle">{{class.name}}</h1> -->
        <!-- </div> -->
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
            const res = await axios.get(`http://localhost:3001/api/`)
            this.classes = res.data
            console.log(res)
        }
    }
}
</script>