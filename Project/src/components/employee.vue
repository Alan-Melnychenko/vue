<template>
  <tr>
    <td>{{ pasport }}</td>
    <td>{{ education }}</td>
    <td>{{ specialty }}</td>
    <td>{{ salary }}</td>
    <td><button @click="onEdit(id)">Edit</button></td>
    <td><button @click="onDelete(id)">Delete</button></td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "employeeCard",

  props: {
    id: {
      type: Number,
      default: 0,
    },
    pasport: {
      type: String,
      default: "No pasport data",
    },
    education: {
      type: String,
      default: "No education",
    },
    specialty: {
      type: String,
      default: "No specialty",
    },
    salary: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions(["deleteEmployeeAction"]),
    onEdit(id) {
      this.$router.push({
        name: "edit",
        params: { id: id },
      });
    },
    onDelete(id) {
      this.deleteEmployeeAction(id);
    },
  },
};
</script>

<style lang="css" scoped></style>
