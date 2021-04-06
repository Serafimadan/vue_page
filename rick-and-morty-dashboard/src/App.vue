<template>
  <div id="app"> 
    {{}}
      <NavBar msgname1="Rick" msgname2="& Morty"/>
      <PieChart
      :data="[
        { label: typesCharacter[0], value: 29 },
        { label: typesCharacter[1], value: 14 },
        { label: typesCharacter[2], value: 10 },
        { label: typesCharacter[3], value: 6 },
        { label: typesCharacter[4], value: 5 },
        { label: typesCharacter[5], value: 4 },
        { label: typesCharacter[6], value: 2 },
      ]"
    />
      <Profile msg1="Justin Roiland" msg2="Co-creator"/>
  </div>
</template>

<script>
import configJson from "../public/data/episodes.json";
// import axios from 'axios';
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
  data(){
    return {
      items: configJson
    }
  },
  mounted: function() {
    // let findData = this.items.map(item => item.characters);
    let findSpecies = this.items.map(item => item.characters.map(type => type.species));
    let findEpisodes = this.items.map(item => item.characters.map(type => type.episode));
  
        for (let elem of findSpecies) {
          console.log(elem);
	    }
        for (let elem of findEpisodes) {
          console.log(elem);
	    
    }

  },
  computed: {
    typesCharacter: function() {
      let findData = this.items.map(item => item.characters.map(type => type.species));
      let result = [].concat(...findData);
      let filteredArray = result.filter(function(item, pos){
        return result.indexOf(item)== pos; 
      });
      return filteredArray;
    },
    uniqAmount: function() {  
        
      return this.items.map(item => item.characters.map(type => type.episode));     
    },
    
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
