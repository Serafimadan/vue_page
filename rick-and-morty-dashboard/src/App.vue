<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="container">
      <NavBar msg="Rick & Morty"/>
      <PieChart
        :data="[
          { label: 'A', value: 60 },
          { label: 'B', value: 40 }
        ]"
      />
      <Profile msg1="Justin Poiland" msg2="Co-creator"/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import PieChart from "./components/PieChart.vue";
import Profile from "./components/Profile.vue";

export default {
  name: "App",
  components: {
    NavBar,
    // HelloWorld,
    PieChart,
    Profile
  }
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    
  }
  .container {
    display: flex;
  } 
</style>
