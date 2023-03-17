<template>
    <div>
        <h1>Current Grade</h1>
        <h3>Student Name: {{ name }}</h3>
        <h3>Grade For This Class: {{ grade }}</h3>
        <p>GPA: {{ gpa }}</p>
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
        newGrade: '',
        studentGrades: [],
        letterGrades: [],
        gpa: 0
    }),
    mounted() {
        this.getStudentsGradeByClass(),
            this.getGradesForOneStudent()
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
        },
        async getGradesForOneStudent() {
            const res = await axios.get(`http://localhost:3001/api/classlists/student/${this.$route.params.studentId}`)
            const data = res.data
            const grades = data.map((student) => {
                switch (student.grade) {
                    case 'A':
                        return 4
                    case 'B':
                        return 3
                    case 'C':
                        return 2
                    case 'D':
                        return 1
                    default:
                        return 0
                }
            })
            this.studentGrades = grades
            this.letterGrades = this.mapGradesToLetters(grades)
            this.gpa = this.calculateGpa(grades)
        },

        mapGradesToLetters(grades) {
            return grades.map((grade) => {
                switch (grade) {
                    case 4:
                        return 'A'
                    case 3:
                        return 'B'
                    case 2:
                        return 'C'
                    case 1:
                        return 'D'
                    default:
                        return ''
                }
            })
        },

        calculateGpa(grades) {
            const totalUnits = grades.length
            let totalPoints = 0
            grades.forEach((grade) => {
                totalPoints += grade
            })
            const gpa = totalPoints / totalUnits
            return gpa.toFixed(2)
        }

    }
}
</script>