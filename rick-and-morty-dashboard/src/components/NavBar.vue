<template>
    <div class="container">
        <div class="content">
            <div class="company-name"> 
                <h3>{{ msgname1 }}</h3>
                <h3>{{ msgname2 }}</h3>
            </div>
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
        </div>    
        <span>Logout</span>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            msgname1: String,
            msgname2: String
        }
    };
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        background-color: #818df8;
        color: #ffffff;
        flex: 10%;
        display: flex;
	    flex-direction: column;
        border-radius: 20px 0 0 20px;
    }   
    .content {
        flex: 1 0 auto;
        position: relative;
    }   
    h3 {
        margin: 0;
    }
    .company-name {
        padding-left: 2em;
        margin-top: 2em;
    }    
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0;
        margin-top: 5em;
    }
    li {
        display: inline-block;
        margin: 0 10px;
        padding-top: 2em;
    }
    a {
        color: #42b983;
    }
    img {
        width: 23px;
        height: 30px;
        filter: invert(1);
    } 
    img path {
        fill: #ffffff;
    }   
    span {
        flex: 0 0 auto;
        text-align: center;
        text-decoration: underline; 
        margin-bottom: 2em;
    }   
    ul li a {
        position:relative;
        z-index: 1;
    }
    ul li a:after {
        position: absolute;
        top: -20px;
        left: -20px;
        bottom: 0;
        right: 0;
        margin: auto;
        padding: 2em 2em 0em 5em;
        width: 100%;
        height: 15px;
        content: '.';
        color: transparent;
        background: #6466f1;
        visibility: none;
        opacity: 0;
        z-index: -1;
        border-radius: 5px 0 0 5px;
    }
    ul li a:hover:after {
        opacity: 1;
        visibility: visible;
        height: 100%;
    }
</style>
