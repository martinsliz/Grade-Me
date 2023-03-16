<template>
  <div>
    <h2>New Student</h2>
    <!-- on click handleChange to form -->
    <form>
      <input v-model="text" placeholder="Name"/>
      <input v-model="text" placeholder="Email"/>
      <input v-model="text" placeholder="GPA"/>
    </form>
    <div>
      <button>Add</button>
      <!-- on submit handleSubmit -->
    </div>
  </div>

</template>

<script>
  export default {
    name: 'NewStudent'
  }
</script>

