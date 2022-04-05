<script setup>

import Book from "../components/Book.vue"

</script>

<template>
<div>
<h1>Book List</h1>
<table border="1px" v-if="bookList">
    <tr>
        <td>Name</td>
        <td>Desc</td>
        <td>Photo</td>
    </tr>
    <tr v-for="book in bookList" v-bind:key="book._id">
<!-- <td>{{book.name}}</td>
<td>{{book.description}}</td>
<td><img style="border: 10px; height: 100; width: 100px; border-radius: 10;" v-bind:src="`http://localhost:5000/profile/${book.photo}`"></td>
    </tr> -->
<router-link to="/book/624b45b418401bcd6c920809"><Book :bookName ="book.name" :bookDesc = "book.description" :bookPhoto="book.photo" /></router-link>
</tr>
</table>

</div>
</template>

<script >
export default {
    name:'Book List',
    data(){
        return {bookList:undefined}
    },
    watch:{

    },
    mounted(){
        fetch("http://localhost:5000/books")
        .then(response => response.json())
    .then(data =>{
        this.bookList=data.books;
console.warn(data)
    })
    }
}

</script>