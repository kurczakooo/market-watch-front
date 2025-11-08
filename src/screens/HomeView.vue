<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
// import type { CurrentAssetData } from '../types/currentAsset';
import { useCurrentAssetStore } from '../stores/currentAsset';
import BigAssetBar from '../components/BigAssetBar.vue';

const currentAssetStore = useCurrentAssetStore();

//////////////////////// TEMP CODE FOR DEVELOPMENT PURPOSES //////////////////////////////////
function getRandomPrice(min: number, max: number) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    intervalId = setInterval(() => {
        const newPrice = getRandomPrice(100000, 110000);
        currentAssetStore.setCurrentAssetNewPrice(newPrice);
    }, 3000);
    // console.log(currentAssetStore.assetData.currentPrice);
});

onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId);
});
//////////////////////// TEMP CODE FOR DEVELOPMENT PURPOSES //////////////////////////////////
</script>

<template>
    <div class="body-background">
        <BigAssetBar
            v-if="currentAssetStore.assetData"
            :brief="currentAssetStore.assetData"
        />
    </div>
</template>
