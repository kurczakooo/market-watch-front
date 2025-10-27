<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import logo from '../assets/images/market_watch_logo.png';

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);
const assetData = ref(null);
</script>

<template>
    <nav
        class="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between"
    >
        <div class="flex items-center">
            <RouterLink to="/">
                <img :src="logo" alt="Market Watch Logo" class="h-8 w-auto" />
            </RouterLink>
            <ul class="ml-6 flex space-x-4">
                <li>
                    <RouterLink
                        to="/"
                        class="text-gray-700 hover:text-blue-500"
                    >
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        to="/browse"
                        class="text-gray-700 hover:text-blue-500"
                    >
                        Browse
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        to="/simulation-prep"
                        class="text-gray-700 hover:text-blue-500"
                    >
                        Backtest Setup
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        to="/simulation"
                        class="text-gray-700 hover:text-blue-500"
                    >
                        Live Simulation
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        to="/news"
                        class="text-gray-700 hover:text-blue-500"
                    >
                        News
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
