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
    // mounted() {
    // },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            const res = await axios.post(`http://localhost:3001/`, { name: this.newClassName })
            console.log(res)
            this.$router.push(`/`)
            this.getClasses()
            //would I also have to put a getClassList() call again here?
        },
        handleChange(e) {
            this.newClassName = e.target.value
        }
    }
}
</script>