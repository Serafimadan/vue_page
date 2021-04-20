<template>  
  <div class="container"> 
    <div> 
      <h1>Statistics</h1>
      <span>By species</span>
    </div>
    <apexchart type="pie" :width="558" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
  import configJson from "../../public/data/episodes.json";
  import VueApexCharts from "vue-apexcharts";

  export default {
    name: "PieGraph",
    components: {
      apexchart: VueApexCharts
    },
    data() {
      return {
        items: configJson,
        series: [],
        chartOptions: {
          chart: {
            width: 458,
            type: "pie"
          },
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
          },
          labels: [],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }, 
            }
          }]
        },
      };
    },
    created: function () { 
        // get characters from all episodes
        // filter out duplicate characters
    let allEpisodesWithCharacters = this.items.flatMap(item => item.characters).filter(
            (character, index, allCharacters) =>
              allCharacters.findIndex(c => c.id === character.id) === index
          );
    console.log(allEpisodesWithCharacters)
    // count species
  const counts = allEpisodesWithCharacters.reduce((counts, { species }) => {
        counts[species] = (counts[species] || 0) + 1;
        return counts;
      }, {});
      console.log(counts)
      // transform to chart data format
      Object.entries(counts)
        .map(([key, value]) => ({
          label: this.chartOptions.labels.push(key),
          value: this.series.push(value)
        }))
        .sort((a, b) => b.value - a.value);

    // let epSpecies = new Map(); // species in all episodes
    // let statPerc = new Map();
    // let epSpeciesArr; // species in an episode
    // let episodeNum = 0;

    // // calculate number of each specie per episode
    // for (let episode of allEpisodesWithCharacters) {
    //   episodeNum++;

    //   // save overall number of characters in the episode
    //   statPerc.set(episodeNum, episode.length); 

    //   // calculate number of each specie in the episode
    //   epSpeciesArr = new Map();
    //   for (let character of episode) {
    //     // summarize characters divided by a specie
    //     if (epSpeciesArr.has(character.species)) {
    //       epSpeciesArr.set(character.species, epSpeciesArr.get(character.species) + 1);
    //     }
    //     else {
    //       epSpeciesArr.set(character.species, 1);
    //     }
    //   }
    //   // save statistics for the episode
    //   epSpecies.set(episodeNum, epSpeciesArr);
    // }

    // let stat = new Map();
    // let total = 0;
    // let value;

    // // calculate overal statistics 
    // for (let [epNum, epStat] of epSpecies.entries()) {
    //   // species ratio in each episode
    //   for (let [specie, charsNum] of epStat.entries()) {
    //     value = charsNum / statPerc.get(epNum);

    //     if (stat.has(specie)) {
    //       stat.set(specie, stat.get(specie) + value);
    //     }
    //     else {
    //       stat.set(specie, value);
    //     }

    //     // total ratio for all species
    //     total += value;
    //   }
    // }

    // // sort array by value
    // let statSorted = new Map([...stat.entries()].sort((a, b) => b[1] - a[1]));

    // fill series with data in percents
    // for (let [key, value] of statSorted.entries()) {
    //   this.chartOptions.labels.push(key);
    //   this.series.push(Math.round(value / total * 100));
    // }
  },
  }
</script>

<style scoped>
  .container {
    flex: 65%;
    padding: 2rem;
    background-color: #ffffff;
    z-index: 2;
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
    font-weight: 500;
    color: #6f7884;
    font-size: 22px;
  } 
</style>
