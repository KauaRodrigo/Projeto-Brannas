<template>
	<div>
		<label>Nome do usuário</label>
		<span></span>
	</div>
</template>
<script lang="ts" setup>

</script>
<style scoped>

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
	border-bottom: 1px solid rgba(2, 131, 131, 0.5);
  padding: 1%;
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
  margin-top: -8%;
}

div label {
  font-weight: bold;
  text-decoration: none;
  color: rgb(19, 47, 73);
  margin-left: 10px;
  text-align: left;
  height: 5vh;
}

label{
  font-size: 14px;
}

</style>