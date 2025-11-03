<script setup lang="ts">
import type { AssetSearchListProps } from '../types/browse';
import AssetListElement from './AssetListElement.vue';

const props = defineProps<AssetSearchListProps>();
</script>

<template>
    <div class="flex flex-1 flex-col">
        <h1 class="unselected-text text-xl font-bold">
            {{ props.listTitle }}
        </h1>
        <div class="search-asset-list min-h-0 rounded-2xl overflow-hidden">
            <div class="px-4 pb-4 overflow-y-auto flex-1">
                <!-- generate a list of asset elements -->
            </div>
        </div>
    </div>
</template>
