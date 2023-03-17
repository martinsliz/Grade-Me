<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/studentlist">Students</router-link>
    <router-link to="/classlist">Classes</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- <style scoped>
nav {
  background-color: #f7f7f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
}

.nav-item:hover {
  background-color: #ddd;
}
</style> -->