<script setup lang="ts">
// const { data: datas, error } = await useFetch("/event");
import axios from "axios";
import { ref, reactive } from "vue";

let datas = ref([]);
async function getUser() {
  try {
    const response = await axios.get("/event");
    datas.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
getUser();
</script>

<template>
  <div class="container">
    <div class="text-center my-5">
      <h1>Liste des événements</h1>
      <hr />
    </div>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12"
        v-for="(data, index) in datas"
        :key="index"
      >
        <Card :data="data" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
