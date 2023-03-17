<template>
  <nav>
    <div className="green">
    <router-link to="/">Home</router-link>
    <router-link to="/studentlist">Students</router-link>
    <router-link to="/classlist">Classes</router-link>
    <router-link to="/about">About</router-link>
  </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>

</style>