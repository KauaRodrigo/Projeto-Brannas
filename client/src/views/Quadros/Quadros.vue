<template>
<button @click="back">
    &lt;-
</button>
<div style="display: flex; flex-wrap: wrap; width: 100%; height: 100%; padding: 0 1%; justify-content: left;">
    <div class="card">
        <h2>Título do quadro</h2>
    </div>
    <div class="card add" @click="add">
        <h2>+</h2>
    </div>
</div>
        
</template>
<script lang="ts" setup>

import {useRouter} from 'vue-router'

const router = useRouter()

function back(){
    router.back()
}

function add(){
    router.push('/quadros/add')
}

</script>
<style scoped>

.card{
    width: 20%;
    max-height: 20%;
    padding: 2%;
    background-color: rgb(40,40,40);
    border-radius: 10px; 
    margin: 10px;
    margin-right: 0;
    color: white; 
    display: flex;
    text-align: center;
    align-items: center; 
    justify-content: center;
}

.add{
    color: rgb(255, 255, 255, 0.8);
    font-size: 60px;
    cursor: pointer;
    font-weight: normal;
    text-shadow: black 1px 1px 5px;
    background-color: rgb(200, 200, 200);
}

.add:hover{
    border: 1px solid black;
}

button{
    height: 5vh;
    width: 5vw;
    border-radius: 48px;
    border: none;
    font-size: 20px;
    margin: 5px;
    display: inline;
    cursor: pointer;
    position: absolute;
    background-color: rgb(255, 255, 255, 0.2); 
    left: 18vw;
    z-index: 999;
    transition: height 1s, width 1s, background-color 0.5s;
}

button:hover{
    background-color: rgb(255, 255, 255, 0.8); 
    width: 5.5vw;
    height: 5.5vh;
}

</style>