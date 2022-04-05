<script setup>
defineProps({
  bookName: {
    type: String,
    required: true,
  },
  bookDesc: {
    type: String,
    required: true,
  },
  bookPhoto: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="books__book">
    <div class="books__book__img">
      <img
        v-bind:src="`http://localhost:5000/profile/${bookPhoto}`"
        alt="Book Name"
      />
    </div>
    <div class="books__book__name">{{ bookName }}</div>
  </div>
</template>
<style scoped>
.books__book {
  cursor: pointer;
  overflow: hidden;
}
</style>