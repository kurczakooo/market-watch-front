<script setup lang="ts">
import { ref, watch } from 'vue';
import { onMounted, onBeforeUnmount } from 'vue';
import { useCurrentAssetStore } from '../stores/currentAsset';
import CurrentAssetNameBox from './CurrentAssetNameBox.vue';

const currentAssetStore = useCurrentAssetStore();
//////////////////////// TEMP CODE FOR DEVELOPMENT PURPOSES //////////////////////////////////
function getRandomPrice(min: number, max: number) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    intervalId = setInterval(() => {
        const currentPrice = currentAssetStore.getCurrentPrice;
        const min = currentPrice - currentPrice / 10; // 10% below
        const max = currentPrice + currentPrice / 10; // 10% above

        const newPrice = getRandomPrice(min, max);
        currentAssetStore.setCurrentAssetNewPrice(newPrice);
    }, 3000);
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
    <div class="flex mt-4 items-center">
        <CurrentAssetNameBox />
        <div
            :class="percentagePriceChange! > 0 ? 'green-icon' : 'red-icon'"
            class="flex flex-1 mr-2 mt-5"
        >
            <span class="text-xl ml-auto">
                {{ percentagePriceChange! > 0 ? '▲' : '▼' }}
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
