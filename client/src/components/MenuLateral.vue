<template>
<div class="menuLateral">
    <nav>
      <MenuHeader />
      <MenuOption label="Quadros" path="/quadros" />
      <router-link to="/about">Cards </router-link>
      <router-link to="/about">To-Dos</router-link>
      <router-link to="/configurações">Configurações</router-link>
      <router-link to="/">Sair do aplicativo</router-link>
  </nav>
  </div>    
</template>
<script lang="ts" setup>

import MenuHeader from './MenuHeader.vue'
import MenuOption from './MenuOption.vue'

</script>
<style scoped>

.menuLateral {
  box-sizing: border-box;
  min-width: 17vw;
  background: #a3e7D6;
  box-shadow: #008080 1px 1px 10px;
  border: 2px solid rgb(140,140,140, 0.5);
  height: 100%;
  padding: 0;
}


nav {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

nav div {
  display: flex;
  justify-content: space-between;
}

div span {
  width: 1.8vw;
  height: 4vh;
  border-radius: 100%;
  background-image: url('../assets/logo.png');
  background-size: 70%;
  background-position: center;
  background-position-y: 70%;
  margin-right: 10px;
  background-color: white;
  background-repeat: no-repeat;
  margin-top: -5px;
}

nav a, div label {
  font-weight: bold;
  text-decoration: none;
  color: rgb(19, 47, 73);
  margin: 10px;
  margin-top: 0;
  text-align: left;
  height: 5vh;
}

nav label{
  font-size: 14px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>