<template>
    <div class="addClassForm">
        <h2 class="addClassTitle">Add Class Form</h2>
        <form @submit="handleSubmit">
            <input placeholder='Enter Class Name' :value="newClassName" @change="handleChange" class="addClassInput">
            <button type="submit" class="addClassBtn">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AddClass',
    props: ['getClasses'],
    data: () => ({
        newClassName: '',
    }),
    mounted() {
        // this.getClasss()
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            const res = await axios.post(`http://localhost:3001/api/class/`, { name: this.newClassName })
            console.log(res)
            this.$router.push(`/`)
            this.getClasss()
        },
        handleChange(e) {
            this.newClassName = e.target.value
        },
        async getClasss() {
            const res = await axios.get(`http://localhost:3001/api/class/get-classes`)
            this.classes = res.data
            console.log(res)
        }
    }
}
</script>