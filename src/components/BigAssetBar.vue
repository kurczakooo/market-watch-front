<script setup lang="ts">
import { ref, watch } from 'vue';
import type { AssetListElementProps } from '../types/browse';
import { onMounted, onBeforeUnmount } from 'vue';
// import type { CurrentAssetData } from '../types/currentAsset';
import { useCurrentAssetStore } from '../stores/currentAsset';

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

const lastPrice = ref<number | null>();
const percentagePriceChange = ref<number | null>();

watch(
    () => currentAssetStore.assetData.currentPrice,
    (newPrice, oldPrice) => {
        if (oldPrice !== undefined && oldPrice !== null) {
            lastPrice.value = oldPrice;
            percentagePriceChange.value =
                ((newPrice - oldPrice) / oldPrice) * 100;
        }
    }
);
</script>

<template>
    <div class="flex flex-1 mt-4 items-center">
        <img
            :src="currentAssetStore.assetData.logoUrl"
            alt="Asset logo"
            class="w-16 h-16 rounded-full mr-2"
        />
        <h1 class="text-5xl font-semibold">
            {{ currentAssetStore.assetData.name }}
        </h1>
        <h3 class="unselected-text mt-5 ml-3 text-xl font-semibold">
            {{ currentAssetStore.assetData.ticker }}
        </h3>
        <div
            :class="percentagePriceChange > 0 ? 'green-icon' : 'red-icon'"
            class="flex flex-1 mr-2 mt-5"
        >
            <span class="text-xl ml-auto">
                {{ percentagePriceChange > 0 ? '▲' : '▼' }}
            </span>
            <h3 class="text-lg font-semibold">
                {{ percentagePriceChange?.toFixed(2) }}%
            </h3>
        </div>
        <h1 class="ml-auto text-5xl font-bold">
            ${{ currentAssetStore.assetData.currentPrice }}
        </h1>
    </div>
</template>
