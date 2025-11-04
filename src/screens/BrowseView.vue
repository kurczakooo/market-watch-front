<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import AssetSearchList from '../components/AssetSearchList.vue';
import mockAssetData from '../assets/utils/browse';
import type { AssetData } from '../types/browse';

const assetData = ref<AssetData>(mockAssetData);

function onSearch(query: string) {
    console.log('Search query:', query);
}
</script>

<template>
    <div class="body-background flex flex-col h-screen">
        <!-- Search Bar (top) -->
        <SearchBar @update="onSearch" />

        <!-- Result Columns (below search bar) -->
        <div class="w-full mt-2 flex-1 flex gap-3 overflow-hidden">
            <AssetSearchList
                listTitle="Stocks"
                :assetsData="assetData.stocks"
            />
            <AssetSearchList listTitle="ETFs" :assetsData="assetData.etfs" />
            <AssetSearchList
                listTitle="Commodities"
                :assetsData="assetData.commodities"
            />
            <AssetSearchList
                listTitle="Crypto"
                :assetsData="assetData.crypto"
            />
        </div>
    </div>
</template>
