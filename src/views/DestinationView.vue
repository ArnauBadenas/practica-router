<script setup lang="ts">
import Data from '@/assets/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue';
import { computed, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

//Accedir als paràmetres de la URL
const route = useRoute()
const parseLocationIdParam = (id: string | string[]): number => {
  if (Array.isArray(id)) {
    return parseInt(id[0]);
  } else {
    return parseInt(id);
  }
}
//Comprovar la url i assignar la ID de destinació correcte
const locationId = ref(parseLocationIdParam(route.params.id));
//location utilitza computed en lloc de ref perque ref no detecta si un objecte canvia enterament, només si canvia un atribut.
//en aquest cas, com cambiem tot el objecte location, s'ha de utilitzar computed que si pot fer aquest tipus de canvis.
const location = computed(() => {
  return Data.destinations[locationId.value - 1];
});

//Canviar la id de location cada vegada que canvii la URL per poder navegar entre locations.
const updateLocationId = (id: string | string[]) => {
  locationId.value = parseLocationIdParam(id);
}
onBeforeRouteUpdate((to, from, next) => {
  updateLocationId(to.params.id);
  next();
});

</script>

<template>
  <main>
    <section id="destination-content" class="row align-items-center">
      <div class="col">
        <h1>{{ location.name }}</h1>
        <button class="m-1 d-block"><a href="/">Go back</a></button>
        <img class="w-100" :src="`/images/${location.image}`" :alt="location.name">
      </div>
      <div class="col">
        <p>{{ location.description }}</p>
      </div>
    </section>
    <section id="top-experiences">
      <h2>Top experiences in {{ location.name }}</h2>
      <section class="row">
        <ExperienceCard :location-id="locationId" :experience="experience" v-for="experience in location.experiences"></ExperienceCard>
      </section>
    </section>
    <section id="current-experience">
      <RouterView></RouterView>
    </section>
  </main>
</template>
