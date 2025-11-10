<script setup lang="ts">
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
import { useCurrentAssetStore } from './stores/currentAsset';

const currentAssetStore = useCurrentAssetStore();

onMounted(() => {
    currentAssetStore.initOnce();
});
</script>

<template>
    <NavBar />
    <RouterView />
</template>
