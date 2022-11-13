<template>
  <div>
    <h1>Main</h1>
    <table>
      <tr>
        <th>Pasport data</th>
        <th>Education</th>
        <th>Specialty</th>
        <th>Salary</th>
        <th></th>
        <th></th>
      </tr>
      <employee-card
        v-for="item in getAllListData"
        :key="item.id"
        :pasport="item.pasport"
        :education="item.education"
        :specialty="item.specialty"
        :salary="item.salary"
      />
    </table>
  </div>
</template>

<script>
import employeeCard from "@/components/employee.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",
  components: {
    employeeCard,
  },
  computed: {
    ...mapGetters(["getAllListData"]),
  },
  methods: {
    goToAdd() {
      this.$router.push({ path: "/add" });
    },
    goToEdit() {
      this.$router.push({ path: "/edit" });
    },
  },
};
</script>

<style lang="css" scoped></style>
