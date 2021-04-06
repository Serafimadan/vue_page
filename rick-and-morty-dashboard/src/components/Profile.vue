<template>
    <div class="container">
        <div class="content">
            <img src="../assets/avatar.jpg" alt="home" class="round">
            <h3>{{ msg1 }}</h3>
            <h4>{{ msg2 }}</h4>
        </div>
        <span>Copyright@Adult Swim</span>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        props: {
            msg1: String,
            msg2: String
        }
    };
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        background-color: #eef2ff;
        flex: 15%;
        display: flex;
	    flex-direction: column;
        border-radius: 0 20px 20px 0;
    }   
    .content {
        flex: 1 0 auto;
    }   
    h3, h4 {
        text-align: center;
        margin: auto;
    }
    h4 {
        color: #6f7884;  
    }    
    .round {
        border-radius: 100px;
        display: block;
        margin: 2rem auto 1rem;
        width: 5rem;
    }
    span {
        flex: 0 0 auto;
        text-align: center; 
        text-decoration: underline;
        margin-bottom: 2em;
        font-size: 0.7em;
        color: #a9a9a9;
    }    
</style>
