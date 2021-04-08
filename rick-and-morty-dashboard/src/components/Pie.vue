<template>  
  <div class="container"> 
    <div> 
      <h1>Statistics</h1>
      <span>By species</span>
    </div>
    <apexchart :width="558" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "PieGraph",
  props: {
    data: Array
  },
  computed: {
    series() {
      return this.data.map(item => item.value);
    },
    chartOptions() {
      const labels = this.data.map(item => item.label);
      return {
        chart: {
          width: 458,
          type: "pie"
        },
        labels,
        dataLabels: {
          textAnchor: "middle",
          formatter: (_, opt) => this.series[opt.seriesIndex],
          enabled: true,
          dropShadow: {
          enabled: true,
          left: 0,
          top: 0,
          opacity: 0
        }
        },
        theme: {
          theme: "dark",
          monochrome: {
            enabled: true,
            color: "#e78b09",
            shadeTo: "light"
          },
          
        }
      };
    }
  },
  components: {
    apexchart: VueApexCharts
  }
};
</script>

<style scoped>
.container {
  flex: 65%;
  padding: 2rem;
  background-color: #ffffff;
} 
.apexcharts-tooltip {
  background: #000;
  color: #eee;
  border: none !important;
}
.apexcharts-tooltip-series-group {
  padding-bottom: 0 !important;
}
h1 {
  margin-bottom: auto;
} 
span {
  font-weight: 800;
  color: #6f7884;
} 
</style>


//   mounted: function() {
//     let findData = this.items.map(item => item.characters);
// //   let findSpecies = this.items.map(item => item.characters.map(type => type.species));
//     // let findEpisodes = this.items.map(item => item.characters.map(type => type.episode.length));

//     let stat = new Map();
//     for (let episode of findData) {
//       for (let character of episode) {
//         if (stat.has(character.species)) {
//           stat.set(character.species, stat.get(character.species) + (character.episode.length));
//         }
//         else {
//           stat.set(character.species, character.episode.length);
//         }
//       }
//     }
//     let res = [];
//     for (let [key, value] of stat.entries()) {
// //      console.log('key is ' + key + ', value is ' + value);
//       res +=  key + " : " + value;
//     }

//     for (let category in stat) {
//       chartData.labels.push(category);
//       chartData.datasets[0].res.push(stat[category]);
//     }
//   return res;
//   },
:data="[
        { label: typesCharacter[0], value: 29 },
        { label: typesCharacter[1], value: 14 },
        { label: typesCharacter[2], value: 10 },
        { label: typesCharacter[3], value: 6 },
        { label: typesCharacter[4], value: 5 },
        { label: typesCharacter[5], value: 4 },
        { label: typesCharacter[6], value: 2 },
      ]"