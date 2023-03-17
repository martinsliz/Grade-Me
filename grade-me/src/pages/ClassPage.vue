<template>
    <div>
        <h2>Class Page</h2>
        <h1 class="classTitle">{{ selectedClass.name }}</h1>
        <!-- <router-link class='button' :to='"/class/" + selectedClass.id + "/addstudent"'>Add Student</router-link> -->
        <div :key="student.id" v-for="student in studentList">
            <router-link :to='"/student/" + student.id' class="student-link">{{ student.name }}</router-link>
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
            // console.log(this.grade)
            // console.log(res)
        },
        async getStudentsGradeByClass() {
            const res = await axios.get(`http://localhost:3001/api/classlists/${this.grade}/class/${this.$route.params.classId}`)
            this.studentList = res.data
            // console.log(res)
        },
        async getGradesForOneStudent() {
            const res = await axios.get(`http://localhost:3001/api/classlists/student/${this.$route.params.studentId}`)
            console.log(res)
            this.studentGrades = res.data //add studentGrades to data/state and add this.getGradesForOneStudent() in mount
        }
    }
}
</script>



<style scoped>
.class-page {
    padding: 20px;
}

.class-title {
    font-size: 32px;
    margin-bottom: 20px;
}

.student-item {
    margin-bottom: 10px;
}

.student-link {
    text-decoration: none;
    color: #1c1c1c;
    font-size: 20px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
}

.student-link:hover {
    color: #0f89a1;
}

/* .button {
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
} */
</style>