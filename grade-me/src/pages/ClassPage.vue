<template>
    <div>
        <h2>Class Page</h2>
        <h1 class="classTitle">{{ selectedClass.name }}</h1>
        <div :key="student.id" v-for="student in studentList">
            <router-link :to='"/student/" + student.id'>{{ student.name }}</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ClassPage',
    components: {},
    data: () => ({
        selectedClass: {},
        studentList: []
    }),
    mounted() {
        this.getClass(),
            this.getStudentsByClass()
    },
    methods: {
        async getClass() {
            const res = await axios.get(`http://localhost:3001/api/class/get-classes/${this.$route.params.classId}`)
            this.selectedClass = res.data
            // console.log(res)
        },
        async getStudentsByClass() {
            const res = await axios.get(`http://localhost:3001/api/class/get-classes/${this.$route.params.classId}/students`)
            this.studentList = res.data
            // console.log(res)
        },
    }
}
</script>