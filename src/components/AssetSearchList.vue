<script setup lang="ts">
import type { AssetSearchListProps } from '../types/browse';
import AssetListElement from './AssetListElement.vue';

const props = defineProps<AssetSearchListProps>();
</script>

<template>
    <div class="flex flex-1 flex-col">
        <h1 class="unselected-text text-2xl font-bold py-3">
            {{ props.listTitle }}
        </h1>
        <div class="search-asset-list">
            <!-- generate a list of asset elements -->
            <AssetListElement
                v-for="asset in props.assetsData"
                :key="asset.ticker"
                :name="asset.name"
                :ticker="asset.ticker"
                :currentPrice="asset.currentPrice"
                :logoUrl="asset.logoUrl"
            />
        </div>
    </div>
</template>
