<template>
  <div>
    <h1>Edit employee</h1>
    <table>
      <tr>
        <th>Pasport data</th>
        <th>Education</th>
        <th>Specialty</th>
        <th>Salary</th>
      </tr>
      <tr>
        <td><input type="text" v-model="pasport" /></td>
        <td><input type="text" v-model="education" /></td>
        <td><input type="text" v-model="specialty" /></td>
        <td><input type="number" v-model="salary" /></td>
      </tr>
    </table>
    <button @click="editEmployee()">Edit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditPage",
  data() {
    return {
      id: 0,
      pasport: "No pasport data",
      education: "No education",
      specialty: "No specialty",
      salary: 0,
    };
  },
  computed: {
    ...mapGetters(["getEmployeeById"]),
    receivedEmployeeId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(["editEmployeeAction"]),
    editEmployee() {
      this.editEmployeeAction([
        this.receivedEmployeeId,
        {
          id: this.id,
          pasport: this.pasport,
          education: this.education,
          specialty: this.specialty,
          salary: this.salary,
        },
      ]);
      this.$router.push({
        name: "main",
      });
    },
    goToMain() {
      this.$router.push({ path: "/" });
    },
    goToAdd() {
      this.$router.push({ path: "/add" });
    },
  },
  mounted() {
    const employee = this.getEmployeeById(this.receivedEmployeeId);
    if (employee) {
      (this.id = employee.id),
        (this.pasport = employee.pasport),
        (this.education = employee.education),
        (this.specialty = employee.specialty),
        (this.salary = employee.salary);
    }
  },
};
</script>

<style lang="scss" scoped></style>
