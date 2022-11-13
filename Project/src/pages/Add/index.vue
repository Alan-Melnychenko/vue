<template>
  <div>
    <h1>Add employee</h1>
    <table>
      <tr>
        <th>Id</th>
        <th>Pasport data</th>
        <th>Education</th>
        <th>Specialty</th>
        <th>Salary</th>
      </tr>
      <tr>
        <td><input type="number" v-model="id" /></td>
        <td><input type="text" v-model="pasport" /></td>
        <td><input type="text" v-model="education" /></td>
        <td><input type="text" v-model="specialty" /></td>
        <td><input type="number" v-model="salary" /></td>
      </tr>
    </table>
    <button @click="addEmployee()">Add</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPage",
  methods: {
    ...mapActions(["addNewEmployeeAction"]),
    addEmployee() {
      this.addNewEmployeeAction({
        id: this.id,
        pasport: this.pasport,
        education: this.education,
        specialty: this.specialty,
        salary: this.salary,
      });
      this.$router.push({
        name: "main",
      });
    },
    goToMain() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
