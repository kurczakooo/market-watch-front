<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import FuzzySearch from 'fuzzy-search';
import SearchBar from '../components/SearchBar.vue';
import AssetSearchList from '../components/AssetSearchList.vue';
import BrowseService from '../services/BrowseService';
import mockAssetData from '../assets/utils/browse';
import type { AssetData, AssetListElementProps } from '../types/browse';

const assetData = ref<AssetData>({
    stocks: [],
    etfs: [],
    commodities: [],
    crypto: [],
});

// reactive query
const searchQuery = ref('');

const filteredAssets = computed<AssetData>(() => {
    const query = searchQuery.value.trim();

    const sortByName = (group: AssetListElementProps[]) =>
        group.slice().sort((a, b) => a.name.localeCompare(b.name));

    if (!query) {
        return {
            stocks: sortByName(assetData.value.stocks),
            etfs: sortByName(assetData.value.etfs),
            commodities: sortByName(assetData.value.commodities),
            crypto: sortByName(assetData.value.crypto),
        };
    }

    const searchGroup = (group: AssetListElementProps[]) => {
        const searcher = new FuzzySearch(group, ['name', 'ticker'], {
            caseSensitive: false,
        });
        return searcher.search(query);
    };

    return {
        stocks: sortByName(searchGroup(assetData.value.stocks)),
        etfs: sortByName(searchGroup(assetData.value.etfs)),
        commodities: sortByName(searchGroup(assetData.value.commodities)),
        crypto: sortByName(searchGroup(assetData.value.crypto)),
    };
});

function onSearch(query: string) {
    searchQuery.value = query;
}

onMounted(async () => {
    try {
        // const response = await BrowseService.fetchBrowseAssetsData();
        // assetData.value = response.data;
        assetData.value = mockAssetData;
    } catch (error) {
        console.error('Error fetching asset data:', error);
    }
});
</script>

<template>
    <div class="body-background">
        <!-- Search Bar (top) -->
        <SearchBar @update="onSearch" />

        <!-- Result Columns (below search bar) -->
        <div class="search-asset-list-container">
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
