<template>
    <div class="navContainer d-flex">
        <nav class="d-flex w-25 ms-3 align-items-center">
            <RouterLink to="/">
                <h2>Home</h2>
            </RouterLink>
            <RouterLink to="/">
                <p>Dashboard</p>
            </RouterLink>
            <RouterLink v-for="location in locations" :key="location.id"
                :to="{ name: 'destination', params: { id: location.id } }">
                <p>{{ location.name }}</p>
            </RouterLink>
            <a href="https://itecbcn.eu/">
                <p>ITB</p>
            </a>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import Data from '@/assets/data.json'
import { reactive } from 'vue';
const locations = reactive(Data.destinations) //Reactive perque es tipus compost
</script>

<style scoped>
p {
    margin: 0;
}

h2 {
    margin: 0;
}

.navContainer {
    background-color: var(--header-color);
    color: white;
    padding: 1em;
}

RouterLink,
a {
    text-decoration: none;
    color: white;
    margin: 0 10px;
}

a {
    display: inline-block;
    position: relative;
    text-decoration: none;
}

a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    border-radius: 5px;
    height: 0.05em;
    bottom: 0;
    left: 0;
    background: currentcolor;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>