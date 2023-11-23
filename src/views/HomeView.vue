<script setup lang="ts">
import Data from '@/assets/data.json'
import { reactive } from 'vue';
const locations = reactive(Data.destinations)
</script>

<template>
    <section class="d-flex flex-wrap">
      <RouterLink class="m-2" v-for="location in locations" :key="location.id"
        :to="{ name: 'destination', params: { id: location.id } }">
        <h2>{{ location.name }}</h2>
        <img :src="`/images/${location.image}`" :alt="location.name">
      </RouterLink>
    </section>
</template>

<style scoped>
a{
  text-decoration: none;
  color: inherit;
}
</style>
