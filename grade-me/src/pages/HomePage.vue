<template>
    <div class="homeContainer">
        <h1 class="homeTitle">GradeMe</h1>
        <ClassList />
    </div>
</template>

<script>
import ClassList from './ClassList.vue'
export default {
    name: 'HomePage',
    components: {
        ClassList,
    }
}
</script>