<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue';
import AssetSearchList from '../components/AssetSearchList.vue';

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
            <AssetSearchList list-title="Stocks" />
            <AssetSearchList list-title="ETFs" />
            <AssetSearchList list-title="Commodities" />
            <AssetSearchList list-title="Crypto" />
        </div>
    </div>
</template>
