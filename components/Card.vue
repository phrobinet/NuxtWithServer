<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card border-secondary mb-5 shadow-sm">
    <div class="card-header">
      <h2>{{ data.title }}</h2>
    </div>
    <div class="card-body">
      <div class="card-text">
        <p>Description: {{ data.description }}</p>
        <p>Date: {{ data.dateEvent }}</p>
        <p>Lieu: {{ data.location }}</p>
      </div>
      <nuxt-link
        to="'/modification'"
        class="btn btn-outline-warning rounded-pill float-end"
        >Modifier</nuxt-link
      >
    </div>
  </div>
</template>

<style scoped></style>
