<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import type { NewsDisplayProps } from '../types/news';

const props = defineProps<NewsDisplayProps>();
const container = ref<HTMLElement | null>(null);

watch(
    () => props.article?.id, // albo slug, url, cokolwiek unikalnego
    async () => {
        await nextTick();
        if (container.value) {
            container.value.scrollTop = 0;
        }
    }
);
</script>

<template>
    <div ref="container" class="news-detail">
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
        <div class="flex-1">
            <article
                class="prose max-w-full space-y-4"
                v-html="props.article.content"
            ></article>
        </div>
    </div>
</template>
