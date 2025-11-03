<script setup lang="ts">
import type { AssetListElementProps } from '../types/browse';

const props = defineProps<AssetListElementProps>();
</script>

<template>
    <div>
        <img
            :src="props.logoUrl"
            alt="Asset Image"
            class="w-10 h-10 rounded-full mr-4"
        />
        <div class="flex flex-col">
            <span class="font-semibold text-lg">{{ props.name }}</span>
            <span class="text-gray-400">{{ props.ticker }}</span>
        </div>
        <p class="ml-auto font-medium text-lg">${{ props.currentPrice }}</p>
    </div>
</template>
