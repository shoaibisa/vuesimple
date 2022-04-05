<script setup>
import Book from "../components/Book.vue";
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
</script>

<template>

<Navbar/>
    <main class="main">
        <h1 class="heading-1 page-heading">Books</h1>
        <div class="books" v-if="bookList">
                <div class="books__book" v-for="book in bookList" v-bind:key="book._id">
                    <router-link :to="{ name: 'book', params: { id: book._id } }">
                        <Book :bookName="book.name" :bookDesc="book.description" :bookPhoto="book.photo" />
                    </router-link>
                </div>
           
        </div>
    </main>
    <Footer/>
   
</template>

<script >
export default {
    name: "Book List",
    data() {
        return { bookList: undefined };
    },
    watch: {},
    mounted() {
        fetch("http://localhost:5000/books")
            .then((response) => response.json())
            .then((data) => {
                this.bookList = data.books;
                console.warn(data);
            });
    },
};
</script>
<style  scoped>
h1.heading-1 {
  text-align: center;
}
main.main {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
}
.books {
  padding: 0 30px;
  display: grid;
  grid-gap: 20px;
  /* grid-auto-rows: 300px; */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>