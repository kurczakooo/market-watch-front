<script setup lang="ts">
import type { NewsDisplayProps } from '../types/news';

const props = defineProps<NewsDisplayProps>();
</script>

<template>
    <div class="news-detail">
        <h1 class="text-3xl font-bold mb-4">
            {{ props.article.title }}
        </h1>
        <p class="text-sm text-gray-600 mb-6">
            {{
                props.article.date
                    ? new Date(props.article.date).toLocaleDateString()
                    : ''
            }}, by
            {{ props.article.author }}
        </p>
        <div class="flex-1" v-html="props.article.content"></div>
    </div>
</template>
