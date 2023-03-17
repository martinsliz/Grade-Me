<template>
  <div class="new-student">
    <h2>New Student</h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" placeholder="Enter name"/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" placeholder="Enter email"/>
      </div>
      <div class="form-group">
        <label for="gpa">GPA:</label>
        <input v-model="gpa" type="number" step="0.01" id="gpa" placeholder="Enter GPA"/>
      </div>

      <button class="add-button" @click="handleSubmit">Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'NewStudent',
    data() {
      return {
        name: '',
        email: '',
        gpa: null
      }
    },
    methods: {
      handleSubmit() {
        // Handle form submission
      }
    }
  }
</script>

<style scoped>
.new-student {
  max-width: 400px;
  margin: 0 auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"] {
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.add-button {
  display: block;
  width: 100%;
  padding: 8px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>
