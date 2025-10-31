<script setup lang="ts">
import { ref } from 'vue';
import NewsBlock from '../components/NewsBlock.vue';

import news from '../assets/temp_data/news.json';

const newsData = ref(news);
const selectedIndex = ref(0);

function handleSelect(index: number) {
    selectedIndex.value = index;
}
</script>

<template>
    <div class="body-background flex">
        <!-- Left email-like news feed bar -->
        <div class="news-list">
            <NewsBlock
                v-for="(article, index) in newsData"
                :key="index"
                :article="article"
                :index="index"
                :selected="index === selectedIndex"
                @select="handleSelect"
            />
        </div>
        <!-- Right detailed news article view -->
        <div class="news-detail">
            <h1 class="text-2xl font-bold mb-4">
                {{ newsData[selectedIndex]?.title }}
            </h1>
            <p class="text-sm text-gray-600 mb-6">
                {{
                    newsData[selectedIndex]?.date
                        ? new Date(
                              newsData[selectedIndex]?.date
                          ).toLocaleDateString()
                        : ''
                }}, by
                {{ newsData[selectedIndex]?.author }}
            </p>
            <p class="">
                {{ newsData[selectedIndex]?.content }}
            </p>
        </div>
    </div>
</template>

<!-- on the moment of entering the page (I think with useEffect) make a function that groups the news data into 4 groups based on the date attribute. The groups should be:
today, last week, last month, last year. and the grouping should be like this:

if the news is form today -> today
if the news is from yesterday to a week ago -> last week
if the news is older than a week but younger than a month -> last month
if the news is older than a month -> last year -->
