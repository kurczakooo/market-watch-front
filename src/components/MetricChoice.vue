<script setup lang="ts">
import { ref } from 'vue';
import config from '../config';

type MetricKey = keyof typeof config.AppAvailableMetrics;
const metrics = Object.keys(config.AppAvailableMetrics) as MetricKey[];
const selectedMetric = ref<MetricKey | null>(null);
const selectMetricEmit = defineEmits<{
    (e: 'select', metric: MetricKey | ''): void;
}>();

const selectMetric = (metric: MetricKey) => {
    if (selectedMetric.value === metric) {
        selectedMetric.value = null;
        selectMetricEmit('select', '');
    } else {
        selectedMetric.value = metric;
        selectMetricEmit('select', metric);
    }
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
    <div class="formatted-desc" v-if="selectedMetric">
        {{ config.AppAvailableMetrics[selectedMetric] }}
    </div>
</template>
