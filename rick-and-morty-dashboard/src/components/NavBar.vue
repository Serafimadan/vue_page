<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
        <li>
            <a href="#">
                <img src="../assets/icons/home.svg" alt="home">
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/icons/chart.svg" alt="chart">
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/icons/chat.svg" alt="chat">
            </a>
        </li>
        </ul>
        <h3>Logout</h3>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            msg: String
        }
    };
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        background-color: #818df8;
        color: #ffffff;
    }    
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
    img {
        width: 25px;
        height: 30px;
        filter: invert(1);
    } 
    img path {
        fill: #ffffff;
    }   
</style>
