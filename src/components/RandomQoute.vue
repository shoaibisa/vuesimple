<script setup>

import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
</script>

<template>
    <Navbar/>
    <main class="main">
        <h1 class="heading-1 page-heading">Quotes</h1>
        <div class="quotes">
          <div class="quotes__quote">
            <div class="quotes__quote__text">Life is easy. And there is no catch.</div>
            <div class="quotes__quote__author">Meharpreet Singh</div>
          </div>
          <div class="quotes__quote">
            <div class="quotes__quote__text">Life is easy. And there is no catch.</div>
            <div class="quotes__quote__author">Meharpreet Singh</div>
          </div>
          <div class="quotes__quote">
            <div class="quotes__quote__text">Life is easy. And there is no catch.</div>
            <div class="quotes__quote__author">Meharpreet Singh</div>
          </div>
          <div class="quotes__quote">
            <div class="quotes__quote__text">Life is easy. And there is no catch.</div>
            <div class="quotes__quote__author">Meharpreet Singh</div>
          </div>
          <div class="quotes__quote">
            <div class="quotes__quote__text">Life is easy. And there is no catch.</div>
            <div class="quotes__quote__author">Meharpreet Singh</div>
          </div>
          <div class="quotes__quote">
            <div class="quotes__quote__text">Life is easy. And there is no catch.</div>
            <div class="quotes__quote__author">Mehapreet Singh</div>
          </div>
        </div>
      </main>
      <Footer/>
       
</template>
<script>
export default {
    name: "quote"

}
</script>
<style scoped>
main.main {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
}
h1.heading-1 {
  text-align: center;
}

.quotes {
  display: grid;
  padding: 0 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
.quotes__quote {
  border: 1px solid #252525;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
}
.quotes__quote__text {
  font-style: italic;
  font-weight: 500;
}
.quotes__quote__author::before {
  content: '- ';
}
.quotes__quote__author {
  font-style: italic;
  font-size: 14px;
  text-align: right;
  font-weight: 600;
}
</style>