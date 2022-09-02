<template>
  <div id="app">
    <h1>Test</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/hello">Hello</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('MOunted')
    self.addEventListener('install', event => {
      console.log('MOunted 2')

      event.waitUntil(
      caches.open('HELLO').then(cache => cache.addAll(['index.html']))
    )
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
