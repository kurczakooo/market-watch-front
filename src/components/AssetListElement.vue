<script setup lang="ts">
import type { AssetListElementProps } from '../types/browse';

const props = defineProps<AssetListElementProps>();
</script>

<template>
    <div class="search-asset-list-element">
        <img
            :src="props.logoUrl"
            alt="asset logo"
            class="w-12 h-12 rounded-full mr-3"
        />
        <div class="flex flex-col">
            <span class="font-bold text-lg">{{ props.name }}</span>
            <span class="font-semibold unselected-text">{{
                props.ticker
            }}</span>
        </div>
        <p class="ml-auto font-bold text-xl">${{ props.currentPrice }}</p>
    </div>
</template>
