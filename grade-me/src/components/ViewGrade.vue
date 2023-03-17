<template>
    <div>
        <h1>Current Grade</h1>
        <h3>Student Name: {{ name }}</h3>
        <h3>Grade For This Class: {{ grade }}</h3>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ViewGrade',
    data: () => ({
        grade: '',
        name: ''
    }),
    mounted() {
        this.getStudentsGradeByClass()
    },
    methods: {
        async getStudentsGradeByClass() {
            const res = await axios.get(`http://localhost:3001/api/classlists/${this.$route.params.classId}/class/${this.$route.params.studentId}`)
            this.grade = res.data.gradeInfo.grade
            console.log(res)
            this.name = res.data.studentInfo.name
        },

    }
}
</script>