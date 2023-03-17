<template>
    <div>
        <h1>Current Grade</h1>
        <h3>Student Name: {{ name }}</h3>
        <h3>Grade For This Class: {{ grade }}</h3>
        <p>Update Grade</p>
        <form @submit="changeGrade">
            <input :value="inputValue" placeholder="Enter Grade" @click="handleChange">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'ViewGrade',
    data: () => ({
        grade: '',
        name: '',
        updateGrade: '',
        newGrade: ''
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
        async changeGrade(e) {
            e.preventDefault()
            const res = await axios.put(`http://localhost:3001/api/classlists/${this.$route.params.classId}/class/${this.$route.params.studentId}`, { grade: this.newGrade })
            // this.updateGrade = res.data
            console.log(res)
            this.getStudentsGradeByClass()
        },
        handleChange(event) {
            this.newGrade = event.target.value
        }

    }
}
</script>