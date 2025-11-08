<script setup lang="ts">
import { ref, watch } from 'vue';
import type { AssetListElementProps } from '../types/browse';

const props = defineProps<{
    brief: AssetListElementProps;
}>();

const lastPrice = ref<number | null>();
const percentagePriceChange = ref<number | null>();

watch(
    () => props.brief.currentPrice,
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
            :src="props.brief.logoUrl"
            alt="Asset logo"
            class="w-16 h-16 rounded-full mr-2"
        />
        <h1 class="text-5xl font-semibold">
            {{ props.brief.name }}
        </h1>
        <!-- <h3 class="">{{ props.brief.ticker }}</h3> -->
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
            ${{ props.brief.currentPrice }}
        </h1>
    </div>
</template>
