<script setup lang="ts">
import { useRouter } from 'vue-router';
import type {
    AssetSearchListProps,
    AssetListElementProps,
} from '../types/browse';
import AssetListElement from './AssetListElement.vue';
import { useCurrentAssetStore } from '../stores/currentAsset';

const currentAssetStore = useCurrentAssetStore();
const router = useRouter();

const props = defineProps<AssetSearchListProps>();

function onSelectAsset(asset: AssetListElementProps) {
    // set current asset to the selected one
    currentAssetStore.setCurrentAsset(asset);
    // route user to home page
    router.push('/');
}
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
                @select="onSelectAsset(asset)"
            />
        </div>
    </div>
</template>
