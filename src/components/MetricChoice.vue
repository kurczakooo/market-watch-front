<script setup lang="ts">
import { ref } from 'vue';

const metrics = ['RSI', 'BB', 'EMA', 'MACD', 'MAD', 'MAE', 'VU', 'RSI'];

const selectedMetric = ref<string | null>(null);

const selectMetric = (metric: string) => {
    console.log(metric);
    selectedMetric.value = metric;
};
</script>

<template>
    <div class="metric-buttons-container">
        <div
            v-for="metric in metrics"
            :key="metric"
            class="metric-button"
            :class="{ selected: selectedMetric === metric }"
            @click="selectMetric(metric)"
        >
            {{ metric }}
        </div>
    </div>
</template>
