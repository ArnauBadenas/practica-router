<template>
    <h1>{{ experience.name }}</h1>
    <img :src="`../../images/${experience.image}`" :alt="`${experience.image}`">
    <p>{{ experience.description }}</p>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Data from '@/assets/data.json'
import { computed } from 'vue';


const route = useRoute()

//Agafo la destinació amb la id
const destination = computed(() => {
    return Data.destinations[parseInt(route.params.id as string) - 1];
});

const experience = computed(() => { 
    //Find et dona el primer valor que troba o undefined, la exclamació del final asegura que retornarà algo.
    return destination.value.experiences.find((experience => experience.slug == `${route.params.experienceSlug}`))! 
})
</script>