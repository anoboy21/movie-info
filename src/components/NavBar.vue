<template>
  <nav>
    <router-link to="/">Home</router-link>
    <form>
      <input type="text" name="search" placeholder="Search" />
      <button>Search</button>
    </form>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  padding: 10px 20px;
  background-color: white;
  margin: 10px 15px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form {
  display: flex;
  gap: 10px;
}

input {
  padding: 8px 10px;
  outline: none;
  border-radius: 5px;
  font-size: inherit;
  border: solid 1px #aaa;
}

button {
  padding: 8px 10px;
  background: none;
  cursor: pointer;
  color: blue;
  border: solid 1px blue;
  border-radius: 5px;
  font-size: inherit;
}
</style>
