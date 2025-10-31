<script setup lang="ts">
import type { NewsBlockProps, NewsBlockEmits } from '../types/news';

const props = defineProps<NewsBlockProps>();
const emit = defineEmits<NewsBlockEmits>();

function emitSelect() {
    emit('select', props.article.id);
}
</script>

<template>
    <div
        class="news-block"
        :class="{ 'news-block--selected': props.selected }"
        @click="emitSelect"
    >
        <h2 class="text-lg font-semibold">{{ props.article.title }}</h2>
        <p class="mt-2 font-light">{{ props.article.intro }}</p>
    </div>
</template>
