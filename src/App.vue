<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
import { onMounted, reactive } from 'vue';
import type { Destination } from './types/Destination';
import Data from '@/assets/data.json'
const locations = reactive(Data.destinations)

</script>

<template>
  <header>
    <TheNavigation></TheNavigation>
  </header>
  <!-- No li poso class container, ja que té padding per defecte i a la foto de la activitat no en té -->
  <main class="ms-3"> 
    <RouterView />
  </main>
</template>

<style scoped></style>
