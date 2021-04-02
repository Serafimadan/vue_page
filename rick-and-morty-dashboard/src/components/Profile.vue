<template>
    <div class="hello">
        <img src="../assets/avatar.jpg" alt="home" class="round">
        <h3>{{ msg1 }}</h3>
        <h4>{{ msg2 }}</h4>
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
    .hello {
        background-color: #eef2ff;
    }    
    h3 {
        margin: 40px 0 0;
    }
    .round {
        border-radius: 100px;
    }
    
</style>
