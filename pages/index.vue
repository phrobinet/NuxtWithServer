<script setup>
import { ref, reactive } from "vue";

let events = reactive([]);

async function getEvents() {
  let response = await $fetch("/event");
  console.log("response:", response);
  return (events = response);
}

async function sum() {
  return events.reduce((acc, event) => acc + event.price, 0);
}

onMounted(async () => {
  getEvents();
});
</script>

<template>
  <div>
    {{ events }}
  </div>
</template>

<style scoped></style>
