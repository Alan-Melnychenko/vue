<template>
  <div>
    <header>
      <router-link class="link" to="/"><b>Main page</b></router-link>
      <router-link class="link" to="/add"><b>Add page</b></router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
button {
  background-color: rgb(95, 95, 255);
}
table {
  background-color: rgb(0, 242, 255);
}
body {
  background-color: rgb(51, 255, 51);
}
.link {
  margin: 10px;
}
table {
  border-collapse: collapse;
  border: 1px solid black;
  padding: 2px;
}
th {
  background-color: rgb(255, 53, 53);
  border: 1px solid black;
  padding: 5px;
}
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
