<template>
  <div id="app"> 
      <NavBar msgname1="Rick" msgname2="& Morty"/>
      <PieChart/>
      <Profile msg1="Justin Roiland" msg2="Co-creator"/>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import PieChart from "./components/PieChart.vue";
  import Profile from "./components/Profile.vue";
  export default {
    name: "App",
    components: {
      NavBar,
      PieChart,
      Profile
    },
  }  
</script>

<style>
html, 
body {
    background-color:#dfe8ff;
}
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* display: grid;
    grid-template-columns: 1fr 5fr 1fr; fraction */
  }
  @media (max-width: 850px) {
    #app {
      flex-direction: column;
      flex: 100%;
      max-width: 100%;
    }
  }
  /* @media (max-width: 768px) { 
    #app {
    grid-template-columns: none;
  }
} */
</style>