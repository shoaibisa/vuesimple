<template>
    <header class="header">
        <div class="logo">Seuss Treasury</div>
        <nav class="nav">
          <a href="/" class="nav__link">Books</a>
           <router-link to="/qoute" class="nav__link" >
                         Quotes
                    </router-link>
       
        </nav>
      </header>
</template>
<script>
export default {
   name:"NavBar"
}
</script>
<style scoped>
/* Typography */

/* Header */
header.header {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  background-color: #ddd;
}
header.header .logo {
  padding: 10px 30px;
  font-size: 30px;
  font-weight: bold;
}
nav.nav {
  padding: 0 30px;
  display: flex;
}
nav.nav .nav__link {
  background-color: #ddd;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  transition: all 0.4s;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
nav.nav .nav__link:hover {
  background-color: #aaa;
  color: #fff;
}
</style>