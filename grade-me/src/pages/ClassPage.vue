<template>
    <div>
        <h2>Class Page</h2>
        <h1 class="classTitle">{{ selectedClass.name }}</h1>
        <div :key="student.id" v-for="student in studentList">
            <router-link :to='"/student/" + student.id'>{{ student.name }}</router-link>
            <router-link :to='"/class/" + this.$route.params.classId + "/student/" + student.id'>View Grade</router-link>

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
        studentList: [],
        grade: ''
    }),
    mounted() {
        this.getClass(),
            this.getStudentsByClass(),
            this.getStudentsGradeByClass()
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
            this.grade = this.studentlist.map((student) => student.id)
            console.log(this.grade)
            console.log(res)
        },
        async getStudentsGradeByClass() {
            const res = await axios.get(`http://localhost:3001/api/classlists/${this.grade}/class/${this.$route.params.classId}`)
            this.studentList = res.data
            console.log(res)
        },
        async getGradesForOneStudent() {
            const res = await axios.get(`http://localhost:3001/api/classlists/student/${this.$route.params.studentId}`)
            console.log(res)
            this.studentGrades = res.data //add studentGrades to data/state and add this.getGradesForOneStudent() in mount
        }
    }
}
</script>