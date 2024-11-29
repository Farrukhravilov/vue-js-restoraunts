<template>
    <div class="my-component">
        
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref("My First Component");
const description = ref("This is a simple example component from the components package.");
</script>

<style scoped>
.my-component {
    text-align: center;
    margin: 20px;
}

h1 {
    color: #42b983;
}

p {
    color: #333;
}</style>
