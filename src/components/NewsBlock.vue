<script setup lang="ts">
import type { NewsArticle } from '../types/news';

const props = defineProps<{
    article: NewsArticle;
    index: number;
    selected?: boolean;
}>();
const emit = defineEmits<(e: 'select', index: number) => void>();

function emitSelect() {
    emit('select', props.index);
}
</script>

<template>
    <div
        class="news-block cursor-pointer p-4"
        :class="{ 'news-block--selected': props.selected }"
        @click="emitSelect"
    >
        <h2 class="text-lg font-semibold">{{ props.article.title }}</h2>
        <p class="mt-2 font-light">{{ props.article.intro }}</p>
    </div>
</template>
