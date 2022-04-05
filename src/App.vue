<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AllBooks from "./components/AllBooks.vue"
 import Rendom  from "./components/RandomQoute.vue"
</script>

<template>
  <router-view></router-view>
 
</template>

<style> 
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Raleway', sans-serif;
  color: #252525;
}
/* Elements */
a {
  text-decoration: none;
  color: currentColor;
}
img {
  width: 100%;
}

#app {
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
