<script setup>
import { ref, reactive } from "vue";

const events = ref([]);

const getUsers = async () => {
  const data = await $fetch(`/event`);
  console.log("data:", data);
  events.value = data;
};
onMounted(async () => {
  getUsers();
});
</script>

<template>
  <div>Event: {{ events }}</div>
</template>

<style scoped></style>
