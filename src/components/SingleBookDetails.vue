<script setup>

import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
</script>
<template>


<Navbar/>
 <main class="main">
        <h1 class="heading-1 page-heading">Book Details</h1>
        <div class="book-details" v-if="book">
          <div class="book-details__img">
            <img v-bind:src="`http://localhost:5000/profile/${book.photo}`" alt="" />
          </div>
          <div class="book-details__content" >
            <div class="book-details__content__title" v-if="book.name">{{ book.name }}</div>
            <div class="book-details__content__description" v-if="book.description">{{ book.description }}</div>
          </div>
        </div>
      </main>
      <Footer/>
   

</template>

<script >
export default {
  name: "BookList",
  data() {
    return { book: undefined, bookId: undefined };
  },
  mounted() {
    fetch(`http://localhost:5000/book/` + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => {
        this.book = data.book;
        console.warn(data);
      });
  },
};
</script>
<style scoped>
.main.main {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
}
h1.heading-1 {
  text-align: center;
}

/* Book Details Page */
.book-details {
  padding: 0 30px;
  display: flex;
  grid-gap: 20px;
}
.book-details__img {
  max-width: 300px;
}
.book-details__content {
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
}
.book-details__content__title {
  font-weight: 600;
}

</style>