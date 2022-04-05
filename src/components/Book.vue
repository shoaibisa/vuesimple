<script setup>
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
</script>

<template>
<h2>{{bookName}}</h2>
<p>{{bookDesc}}</p>
<td><img style="border: 10px; height: 100; width: 100px; border-radius: 10;" v-bind:src="`http://localhost:5000/profile/${bookPhoto}`"></td>

</template>