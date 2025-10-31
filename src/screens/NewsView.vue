<script setup lang="ts">
import { ref, computed } from 'vue';
import NewsBlock from '../components/NewsBlock.vue';
import type { NewsArticle } from '../types/news';
import news from '../assets/temp_data/news.json';

const newsData = ref<NewsArticle[]>(news);
const selectedId = ref<number | null>(null);
const groupedNews = computed(() => groupNewsByDate(newsData.value));
const selectedArticle = computed(() =>
    newsData.value.find(article => article.id === selectedId.value)
);

function handleSelect(id: number) {
    selectedId.value = id;
}

function groupNewsByDate(newsList: NewsArticle[]) {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;
    const oneMonth = 30 * oneDay;

    const groups: Record<string, NewsArticle[]> = {
        today: [],
        lastWeek: [],
        lastMonth: [],
        lastYear: [],
    };

    // calculate the difference between now and the article date and group accordingly
    for (const article of newsList) {
        const diff = now.getTime() - article.date;

        if (diff < oneDay) {
            groups.today?.push(article);
        } else if (diff < oneWeek) {
            groups.lastWeek?.push(article);
        } else if (diff < oneMonth) {
            groups.lastMonth?.push(article);
        } else {
            groups.lastYear?.push(article);
        }
    }

    return groups;
}

function formatLabel(label: string) {
    return (
        {
            today: 'Today',
            lastWeek: 'Last Week',
            lastMonth: 'Last Month',
            lastYear: 'Last Year',
        }[label] ?? label
    );
}
</script>

<template>
    <div class="body-background flex">
        <!-- Left email-like news feed bar -->
        <div class="news-list">
            <template v-for="(articles, label) in groupedNews" :key="label">
                <h2 class="unselected-text px-4 py-2 text-xl font-bold">
                    {{ formatLabel(label) }}
                </h2>
                <NewsBlock
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                    :selected="selectedId === article.id"
                    @select="handleSelect(article.id)"
                />
            </template>
        </div>
        <!-- Right detailed news article view -->
        <div class="news-detail" v-if="selectedArticle">
            <h1 class="text-2xl font-bold mb-4">
                {{ selectedArticle.title }}
            </h1>
            <p class="text-sm text-gray-600 mb-6">
                {{
                    selectedArticle.date
                        ? new Date(selectedArticle.date).toLocaleDateString()
                        : ''
                }}, by
                {{ selectedArticle.author }}
            </p>
            <p class="">
                {{ selectedArticle.content }}
            </p>
        </div>
    </div>
</template>
