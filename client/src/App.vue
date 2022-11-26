<template>
  <div class="menuLateral">
    <nav>
      <div>
        <label>TESTE</label>
        <span></span>
      </div>
      <div class="menuDivider"></div>
      <router-link to="/about">Quadros</router-link>
      <router-link to="/about">Cards </router-link>
      <router-link to="/about">To-Dos</router-link>
      <div class="menuDivider"></div>
      <router-link to="/about">Configurações</router-link>
  </nav>
  </div>
  <router-view/>
</template>

<style>
html, body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #898284;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menuLateral {
  width: 20vw;
  background: #a3e7D6;
  box-shadow: #008080 1px 1px 10px;
  height: 100vh;
  padding: 0;
}

.menuDivider{
  border-bottom: 1px solid rgba(50,50,50,0.3);
  margin-top: 0px;
  margin-bottom: 20px;
  width: 100%;
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
  background-image: url('./assets/logo.png');
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
