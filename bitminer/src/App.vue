<template>
  <div>
    <div id="main-navigation">
      <a href="/blockchain" class="navlink">BlockChain!</a>
      <a href="/mine" class="navlink">Mine!</a>
      <a href="/transact" class="navlink">Transact!</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main-navigation {
  width: 100%;
  display: flex;
  background-color: black;
  height: 2.5em;
}

.navlink {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  margin-top: .3em;
  font-family: "Rye", sans-serif;
}
</style>
