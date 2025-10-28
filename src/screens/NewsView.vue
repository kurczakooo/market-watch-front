<script setup lang="ts">
import { ref } from 'vue';

import news from '../assets/temp_data/news.json';

const newsData = ref(news);
</script>

<template>
    <div class="body-background flex">
        <!-- Left email-like news feed bar -->
        <div class="w-1/3 border-r overflow-y-auto h-screen">
            <div
                v-for="article in newsData"
                :key="article.id"
                class="p-4 border-b hover:bg-gray-200 cursor-pointer"
            >
                <h2 class="text-lg font-semibold">{{ article.title }}</h2>
                <p class="text-sm text-gray-600">{{ article.date }}</p>
                <p class="mt-2 text-gray-800">{{ article.intro }}</p>
            </div>
        </div>
        <!-- Right detailed news article view -->
        <div class="w-2/3 overflow-y-auto h-screen">
            <div class="p-6">
                <h1 class="text-2xl font-bold mb-4">
                    {{ newsData[0].title }}
                </h1>
                <p class="text-sm text-gray-600 mb-6">
                    {{ newsData[0].date }}
                </p>
                <p class="text-gray-800">
                    {{ newsData[0].content }}
                </p>
            </div>
        </div>
    </div>
</template>
