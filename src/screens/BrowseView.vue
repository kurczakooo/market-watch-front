<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue';

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
            <div class="flex flex-1 flex-col">
                <h1 class="text-unselectedtext text-xl font-bold">Stocks</h1>
                <div
                    class="flex-1 min-h-0 bg-gray-500 rounded-2xl overflow-hidden flex flex-col"
                >
                    <div class="px-4 pb-4 overflow-y-auto flex-1">
                        <!-- ...stock results... -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
