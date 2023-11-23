<template>
    <article class="col-3">
        <RouterLink :to="`/destination/${locationId}/${experience.slug}`">
        <div class="m-2">
            <img class="img-fluid" :src="`/images/${$props.experience.image}`" alt="">
            <p class="w-100 pt-1 pb-1 experience-title">{{ $props.experience.name }}</p>
        </div>
        </RouterLink>
    </article>
</template>
<script lang="ts" setup>
import Data from '@/assets/data.json'
import { reactive } from 'vue';
const props = defineProps(['locationId','experience'])
</script>
<style scoped>
.experience-title {
    background-color: #2C3E50;
    color: white;
    font-weight: bold;
    text-align: center;
}
img{
    width: 100%;
    height: 180px;
}
</style>