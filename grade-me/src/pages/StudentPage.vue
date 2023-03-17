<template>
  <div>
  <h3>Student</h3>
  <section class="details">
      <div class="flex-row space">
        <h3>
          <!-- <h3>{{ studentDetails.name }}</h3>
          <h4>{{ studentDetails.gpa}}</h4>
          <h4>{{ studentDetails.email}}</h4> -->
        </h3>
      </div>
      <div>
        <router-link to="/addstudent/:data" name="NewStudent">
          <button>ADD STUDENT</button>
        </router-link>
      </div>
    </section>
      

      </div>
      <div>
        </div>
</template>


<script>
// import axios from 'axios'

export default {
name: 'StudentPage',
props: ["student"],
// data: () => ({
// student: {}
// }),
// created() {this.student = this.$route.params.data},

}
</script>