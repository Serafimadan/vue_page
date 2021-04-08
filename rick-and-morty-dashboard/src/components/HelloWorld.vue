

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>




<template>
  <div id="app"> 
      <NavBar msgname1="Rick" msgname2="& Morty"/>
      <PieChart
      :data="[items]"
    />
      <Profile msg1="Justin Roiland" msg2="Co-creator"/>
      {{uniqAmount}}
  </div>
</template>

<script>
import configJson from "../public/data/episodes.json";
import NavBar from "./components/NavBar.vue";
import PieChart from "./components/PieChart.vue";
import Profile from "./components/Profile.vue";

export default {
  name: "App",
  components: {
    NavBar,
    PieChart,
    Profile,

  },
  data(){
    return {
      items: configJson
    }
  },
  computed: {
    // typesCharacter: function() {
    //   let findData = this.items.map(item => item.characters.map(type => type.species));
    //   let result = [].concat(...findData);
    //   let filteredArray = result.filter(function(item, pos){
    //     return result.indexOf(item)== pos; 
    //   });
    //   return filteredArray;
    // },
    uniqAmount: function() {  
      let findData = this.items.map(item => item.characters); 
      let stat = new Map();
      for (let episode of findData) {
        for (let character of episode) {
          if (stat.has(character.species)) {
            stat.set(character.species, stat.get(character.species) + (character.episode.length));
          }
          else {
            stat.set(character.species, character.episode.length);
          }
        }
      };

      let res = '';
      for (let [key, value] of stat.entries()) {
        res +=  key + " : " + Math.round(value/651*100);
      }
      console.log(res);
        return res;     
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
