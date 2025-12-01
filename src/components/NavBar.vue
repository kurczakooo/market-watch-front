<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '../assets/images/market_watch_logo.png';
import { useCurrentAssetStore } from '../stores/currentAsset';
import config from '../config';

const currentAssetStore = useCurrentAssetStore();
</script>

<template>
    <nav class="bg-navbar">
        <div class="flex items-center">
            <RouterLink to="/" class="flex items-center p-10">
                <img :src="logo" alt="Market Watch Logo" class="h-15 w-auto" />
                <span class="ml-2 font-bold text-2xl"> {{ config.appTitle }} </span>
            </RouterLink>
            <ul class="flex-1 pl-70 pr-70 flex justify-between">
                <li>
                    <RouterLink to="/" class="tab-title" active-class="selected">
                        {{ currentAssetStore.$state.assetData.ticker }}
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/browse" class="tab-title" active-class="selected"> Browse </RouterLink>
                </li>
                <li>
                    <RouterLink to="/simulation-prep" class="tab-title" active-class="selected"> Backtest Setup </RouterLink>
                </li>
                <li>
                    <RouterLink to="/simulation" class="tab-title" active-class="selected"> Live Simulation </RouterLink>
                </li>
                <li>
                    <RouterLink to="/news" class="tab-title" active-class="selected"> News </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
