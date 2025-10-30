<script setup lang="ts">
import searchIcon from '../assets/icons/search-solid.svg';
</script>

<template>
    <div class="body-background flex flex-col h-screen">
        <!-- Search Bar (top) -->
        <div class="w-full max-w-3xl mx-auto py-4">
            <div class="relative">
                <img
                    :src="searchIcon"
                    alt="search"
                    class="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70"
                />
                <input
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    class="w-full pl-12 pr-4 py-3 rounded-full bg-gray-600 placeholder-gray-400 text-white"
                />
            </div>
        </div>

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

            <div class="flex flex-1 flex-col">
                <h1 class="text-xl unselectedtext font-bold">ETFs</h1>
                <div
                    class="flex-1 min-h-0 bg-gray-500 rounded-2xl overflow-hidden flex flex-col"
                >
                    <div class="px-4 pb-4 overflow-y-auto flex-1">
                        <!-- ...stock results... -->
                    </div>
                </div>
            </div>
            <div class="flex flex-1 flex-col">
                <h1 class="text-unselectedtext text-xl font-bold">
                    Comodities
                </h1>
                <div
                    class="flex-1 min-h-0 bg-gray-500 rounded-2xl overflow-hidden flex flex-col"
                >
                    <div class="px-4 pb-4 overflow-y-auto flex-1">
                        <!-- ...stock results... -->
                    </div>
                </div>
            </div>
            <div class="flex flex-1 flex-col">
                <h1 class="text-unselectedtext text-xl font-bold">Crypto</h1>
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
