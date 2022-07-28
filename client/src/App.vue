<template>
  <div id="app" style="display: flex">
    <MenuLateral/>

    <router-view/>
    
  </div>
</template>

<script lang="ts" setup>

import MenuLateral from './components/MenuLateral.vue'

import {useRouter} from 'vue-router'

const router = useRouter()

function back(){
  router.back()
}

</script>

<style>
html, body{
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #898284;
}

#app {
   height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
