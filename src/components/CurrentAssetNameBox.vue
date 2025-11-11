<script setup lang="ts">
import { useCurrentAssetStore } from '../stores/currentAsset';

const currentAssetStore = useCurrentAssetStore();
</script>

<template>
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
</template>
