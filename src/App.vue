<template>
  <div id="app" style="height:100vh">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    <NavBar/>
        <SubNavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
import SubNavBar from "./components/subNavBar.vue";

export default {
  components: {
    NavBar,
    SubNavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
* {
  padding: 0;
  margin: 0;
}

.cursor-pointer {
  cursor: pointer;
}

.h-6 {
  height: 20px;
}
.w-6 {
  width: 20px;
}
</style>
