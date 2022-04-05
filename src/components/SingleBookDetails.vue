<!-- <script setup>
defineProps({
  bookName: {
    type: String,
    required: true
  },
  bookDesc:{
    type:String,
        required: true

  },
  bookPhoto:{
          type:String,
        required: true
  }
})
</script> -->

<template>
<div v-if="book">

    <h2 v-if="book.name">{{book.name}}</h2> -->
<p v-if="book.description">{{book.description}}</p>
<td v-if="book.photo"><img style="border: 10px; height: 100; width: 100px; border-radius: 10;" v-bind:src="`http://localhost:5000/profile/${book.photo}`"></td>

</div>
<h2>{{ $route.params.id }}</h2>
 <!-- <h2>{{book}} </h2>  -->
 <!-- <h3>{{bookId}}</h3> -->
 <!-- <BookList></BookList> -->
</template>

<script >
export default {
    name:'BookList',
//     watch :{
// '$route'(to, from){
//   bookId:to.params.id
// }
    // },
    data(){
        return {book:undefined, bookId:undefined}
    },
    mounted(){
        fetch(`http://localhost:5000/book/`+this.$route.params.id )
        .then(response => response.json())
    .then(data =>{
        this.book=data.book;
console.warn(data)
    })
    }
}

</script>