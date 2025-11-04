<script setup lang="ts">
import { ref, computed } from 'vue';
import FuzzySearch from 'fuzzy-search';
import SearchBar from '../components/SearchBar.vue';
import AssetSearchList from '../components/AssetSearchList.vue';
import mockAssetData from '../assets/utils/browse';
import type { AssetData, AssetListElementProps } from '../types/browse';

const assetData = ref<AssetData>(mockAssetData);

// reactive query
const searchQuery = ref('');

const filteredAssets = computed<AssetData>(() => {
    const query = searchQuery.value.trim();

    if (!query) return assetData.value;

    const searchGroup = (group: AssetListElementProps[]) => {
        const searcher = new FuzzySearch(group, ['name', 'ticker'], {
            caseSensitive: false,
        });
        return searcher.search(query);
    };

    return {
        stocks: searchGroup(assetData.value.stocks),
        etfs: searchGroup(assetData.value.etfs),
        commodities: searchGroup(assetData.value.commodities),
        crypto: searchGroup(assetData.value.crypto),
    };
});

function onSearch(query: string) {
    searchQuery.value = query;
}

// const allAssets: AssetListElementProps[] = [
//     ...assetData.value.stocks,
//     ...assetData.value.etfs,
//     ...assetData.value.commodities,
//     ...assetData.value.crypto,
// ];

// const searcher = new FuzzySearch(allAssets, ['name', 'ticker'], {
//     caseSensitive: false,
// });

// function onSearch(query: string) {
//     console.log('Search query:', query);

//     if (!query) {
//         return allAssets;
//     }

//     const results = searcher.search(query);
//     console.log('Search results:', results);

//     return results;
// }
</script>

<template>
    <div class="body-background flex flex-col h-screen">
        <!-- Search Bar (top) -->
        <SearchBar @update="onSearch" />

        <!-- Result Columns (below search bar) -->
        <div class="w-full mt-2 flex-1 flex gap-3 overflow-hidden">
            <AssetSearchList
                listTitle="Stocks"
                :assetsData="filteredAssets.stocks"
            />
            <AssetSearchList
                listTitle="ETFs"
                :assetsData="filteredAssets.etfs"
            />
            <AssetSearchList
                listTitle="Commodities"
                :assetsData="filteredAssets.commodities"
            />
            <AssetSearchList
                listTitle="Crypto"
                :assetsData="filteredAssets.crypto"
            />
        </div>
    </div>
</template>
